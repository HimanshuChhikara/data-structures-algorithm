removeInventoryfromCampaign: function (req, res, next) {
    try {
      var indoorCampaignDetailId = req.param('indoorCampaignDetailId');
      var storeId = req.param("storeId");
      var indoorcampaign = req.param("indoorcampaign");//always Indoor
      IndoorCampaignDetail.findOne(indoorCampaignDetailId, function (err, indoorCampaignDetail) {
        if (err) {
          return res.json({
            success: false,
            message: "Something went wrong, please contact admin",
          });
        } else if (indoorCampaignDetail) {

          Campaign.findOne(indoorCampaignDetail.campaignId, function foundUsers(err, campaign) {
            req.session.indoorcampaignid = campaign.id;
            req.session.indoorcampaignname = campaign.campaignName;
            req.session.indoorcampaignShortName = campaign.campaignShortName;
            var existCategory;
            IndoorCampaignDetail.findByCampaignId(indoorCampaignDetail.campaignId, function foundIndoorCampaignDetail(err, indoorCampaignDetails) {
              var count = 0;
              indoorCampaignDetails.forEach(function (tmpindoorCampaignDetail) {
                count = count + 1;

                if (count == indoorCampaignDetails.length) {
                  var currentDate = new Date();
                  var startDate = indoorCampaignDetail.blockFrom;
                  var endDate = indoorCampaignDetail.blockTill;

                  var currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
                  var startDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
                  var endDate = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());

                  var finalizeCondition = (currentDate.getTime() >= startDate.getTime() && campaign.status == 'C');

                  //If campaign is finalized & Running
                  if (finalizeCondition) {
                    console.log('finalizeCondition.....',finalizeCondition);
                    if (currentDate.getTime() > endDate.getTime()) { //booking has been over
                      var message = 'Can not remove the inventory because campaign has been over';
                      if (HelperService.isValid(storeId) && HelperService.isValid(indoorcampaign)) {
                        return res.json({
                          success: false, url: "/indoorstore/showinvenotry?", query: {
                            storeid: storeId,
                            indoorcampaign: indoorcampaign
                          }, message: message
                        });
                      } else {
                        return res.json({
                          success: false,
                          url: "/campaign/showInventoryCampaign?",
                          query: {
                            campaignId: req.session.indoorcampaignid,
                            campaignName: indoorcampaign,
                            campaignShortName: req.session.indoorcampaignShortName
                          }, message: message
                        });
                      }
                    } else {
                      console.log('finalizeCondition..else...');
                      var originalDays = HelperService.findDaysBetweenDates(indoorCampaignDetail.blockFrom.getTime(), indoorCampaignDetail.blockTill.getTime());
                      var newDays = HelperService.findDaysBetweenDates(startDate.getTime(), currentDate.getTime());

                      var orginalPrice = indoorCampaignDetail.calculatedPrice;
                      var originalPriceBeforeDiscount = indoorCampaignDetail.pricebeforediscount;
                      if (HelperService.isUndefined(originalPriceBeforeDiscount)) {
                        originalPriceBeforeDiscount = orginalPrice;
                      }

                      orginalPrice = parseFloat(orginalPrice);
                      originalDays = parseInt(originalDays);
                      originalPriceBeforeDiscount = parseFloat(originalPriceBeforeDiscount);

                      newDays = parseInt(newDays);

                      var newPrice = (orginalPrice * newDays) / originalDays;
                      var newOriginalPriceBeforeDiscount = (originalPriceBeforeDiscount * newDays) / originalDays;

                      indoorCampaignDetail.calculatedPrice = newPrice.toFixed(2);
                      indoorCampaignDetail.pricebeforediscount = newOriginalPriceBeforeDiscount.toFixed(2);
                      indoorCampaignDetail.blockTill = currentDate;
                      indoorCampaignDetail.blockTillAsStr = moment(currentDate).format('DD-MMM-YYYY');
                      indoorCampaignDetail.removeDateAsStr = moment(currentDate).format('DD-MMM-YYYY');


                      var finalPrice = campaign.finalPrice;
                      finalPrice = parseFloat(finalPrice);
                      var finaltax = campaign.finaltax;
                      finaltax = parseFloat(finaltax);

                      var finalpricewithtax = campaign.finalpricewithtax;
                      finalpricewithtax = parseFloat(finalpricewithtax);

                      finalPrice = finalPrice + newPrice - orginalPrice;

                      finaltax = HelperService.calculateTaxForInventory(finalPrice, campaign);
                      var finalpricewithtax = ((parseFloat(finalPrice)) + (parseFloat(finaltax)));

                      finaltax = parseFloat(finaltax);

                      campaign.finalPrice = finalPrice.toFixed(2);
                      campaign.finaltax = finaltax.toFixed(2);
                      campaign.finalpricewithtax = finalpricewithtax.toFixed(2);
                      campaign.finalFootFalls -= indoorCampaignDetail.footFalls;

                      indoorCampaignDetail.removeFromCampaign = 'Y';
                      indoorCampaignDetail.removeFromCampaignReason = req.param('removeFromCampaignReason');
                      console.log('indoorCampaignDetail..save...',indoorCampaignDetail);
                      console.log('campaign..save...',campaign);
                      indoorCampaignDetail.save();
                      campaign.save();

                      StoreInventoryAvailable.findOne(indoorCampaignDetail.storeInventoryAvailableId, function foundStoreInventoryAvailable(err, storeInventoryAvailable) {
                        if (HelperService.isUndefined(storeInventoryAvailable)) {
                          return res.json({
                            success: false,
                            url: "/campaign/showInventoryCampaign?",
                            query: {
                              campaignId: req.session.indoorcampaignid,
                              campaignName: req.session.indoorcampaignname,
                              campaignShortName: req.session.indoorcampaignShortName
                            },
                            message: indoorCampaignDetail.inventoryId + " can't be removed from campaign " + campaign.campaignName + " because it's not there"
                          });
                        } else {
                          console.log('StoreInventoryAvailable..else...');
                          var oldBlockTillDate = storeInventoryAvailable.blockTill;
                          var message = 'Can not remove the inventory because inventory start date has been elapsed. Inventory has been removed for ' + moment(currentDate).add(1, "days").format('DD-MMM-YYYY') + ' to ' + moment(oldBlockTillDate).format('DD-MMM-YYYY') + ' period';
                          //delete task if campaign enddate decreases

                          var campaignEndDate1 = new Date(oldBlockTillDate).setHours(0, 0, 0, 0);
                          var today = new Date(currentDate).setHours(0, 0, 0, 0);
                          var taskCriteria = { 'data.campaignId': indoorCampaignDetail.campaignId };
                          taskCriteria["data.indoorCampaignDetailId"] = indoorCampaignDetailId;
                          taskCriteria['or'] = [
                            { startDate: { '$lte': new Date(today) }, endDate: { '$gte': new Date(today) } },
                            { startDate: { '$lte': new Date(today) }, endDate: { '$gte': new Date(today) } },
                            { startDate: { '$gte': new Date(today) }, endDate: { '$lte': new Date(today) } },
                          ];


                          var endDate = new Date(campaignEndDate1);
                          var param = {
                            endDate: currentDate,

                          }

                          AgencyTaskService.updateAgencyTask(req, taskCriteria, param, function (callback) {

                            if (callback.success) {
                              if (callback.agencyTasks.length > 0) {
                                var criteria1 = {
                                  'data.campaignId': indoorCampaignDetail.campaignId,
                                  "data.indoorCampaignDetailId": indoorCampaignDetailId
                                }
                                // criteria1['or']=[
                                //   {startDate: {'$gt': new Date(req.param('campaignEndDate'))}},
                                //   {endDate: {'$gt': new Date(req.param('campaignEndDate'))}}
                                // ]
                                criteria1['startDate'] = { '$gte': new Date(currentDate) };
                                criteria1['endDate'] = { '$lte': new Date(campaignEndDate1) };
                                var params = {
                                  isDeleted: true
                                }
                                AgencyTaskService.updateAgencyTask(req, criteria1, params, function (deleteTaskCallBack) {
                                  if (deleteTaskCallBack.success) {
                                    console.log("Extra task deleted");
                                  }
                                })
                              }
                            }
                          })


                          //==================================

                          if (HelperService.diffDays(currentDate, storeInventoryAvailable.blockTill) <= 0) {
                            message = "Can not remove the inventory because inventory start & end date has been elapsed.";
                          } else {
                            storeInventoryAvailable.status = 'N';
                            storeInventoryAvailable.blockTill = currentDate;
                            storeInventoryAvailable.blockTillAsStr = moment(currentDate).format('DD-MMM-YYYY');
                          }
                          storeInventoryAvailable.save();
                          if (HelperService.isValid(storeId) && HelperService.isValid(indoorcampaign)) {
                            return res.json({
                              success: true,
                              url: "/indoorstore/showinvenotry?",
                              query: {
                                storeid: storeId,
                                indoorcampaign: indoorcampaign
                              },
                              message: message
                            });
                          } else {
                            return res.json({
                              success: true,
                              url: "/campaign/showInventoryCampaign?",
                              query: {
                                campaignId: req.session.indoorcampaignid,
                                campaignName: indoorcampaign,
                                campaignShortName: req.session.indoorcampaignShortName
                              },
                              message: message
                            });
                          }
                        }
                      });
                    }

                  } else {//destory all related booking info & business entities along with main booking i.e indoorcampaigndetail
                    console.log('native....else start');
                    IndoorCampaignDetail.native(function (err, coll) {
                      coll.distinct("entityId", {
                        campaignId: campaign.id,
                        agencyId: req.session.loggedUser.parentId
                      }, function (err, result) {//Update entities for campaign
                        if (err) {
                          console.log(err);
                        } else {
                          campaign.entities = result;
                          console.log('native....1',result);
                          IndoorCampaignDetail.native(function (err, coll) {
                            coll.distinct("inventorycategory", {
                              campaignId: campaign.id,
                              agencyId: req.session.loggedUser.parentId
                            }, function (err, result) {
                              if (err) {
                                console.log(err);
                              } else {
                                campaign.avaliableIventoryType = result;
                                console.log('native....2',result);
                                campaign.totalNumberOfInventoryType = result.length;
                                IndoorCampaignDetailService.updateIndoorCampaignDetails(req, {
                                  id: indoorCampaignDetailId,
                                  campaignId: campaign.id,
                                  agencyId: req.session.loggedUser.parentId
                                }, { isDeleted: true }, function (callback) {
                                  //console.log('callback111....',callback);
                                  if (callback.success) {
                                    console.log(callback.indoorCampaignDetails.length + 'IndoorCampaignDetail data has been isDeleted true successfully ')
                                    /*Start - isDeleted true storeinventory available*/
                                    var storeInventoryAvailableId = indoorCampaignDetail.storeInventoryAvailableId;
                                    StoreInventoryAvailableService.updateStoreInventories(req, {
                                      id: storeInventoryAvailableId,
                                      campaignid: campaign.id,
                                      agencyId: req.session.loggedUser.parentId
                                    }, { isDeleted: true }, function (callback) {
                                     // console.log('callback222....',callback);
                                      if (callback.success) {
                                        // var NewInventryData = [];
                                      var NewInventryData=callback.inventories;
                                        console.log('NewInventryData..22..',NewInventryData);
                                        console.log('NewInventryData..22.length.',NewInventryData.length);
                                        IndoorCampaignDetailService.OiMedia_External_Key_campaignInventoryStatus(req, NewInventryData, req.session.agencyId, function (result) {
                                          console.log('controller..campaignInventory..', result.body);

                                          if (result.success) {
                                            //res.json({success: true, deal: result.deal});
                                            var errorMsg = [];
                                            result.body.forEach(function (item) {
                                              // console.log('dealInventory..item.message...', item.errors);
                                              errorMsg.push(item.errors);
                                             //console.log('campaignInventory..errorMsg...', errorMsg);
                                            });
                                            console.log('result.body.message.....', errorMsg);
                                            if (result.body.message !== null && result.body.message !== undefined) {
                                              console.log('if....');
                                            } else {
                                              // console.log('else..result.body.status..',result.body.status);
                                              // deal.Status = result.body.status;
                                            }

                                          }
                                        });
                                        console.log(callback.inventories.length + 'StoreInventoryAvailable data has been isDeleted true successfully')
                                      }

                                    });

                                    /*End - isDeleted true storeinventory available*/


                                    /*Start - isDeleted  true for agency task*/

                                    var searchCriteria = {
                                      agencyId: req.session.loggedUser.parentId,
                                      "data.campaignId": campaign.id,
                                      taskStatus: { '!': "Completed" }
                                    };
                                    searchCriteria["data.indoorCampaignDetailId"] = indoorCampaignDetailId;
                                    AgencyTaskService.updateAgencyTask(req, searchCriteria, { isDeleted: true }, function (agencyTasksResult) {
                                      console.log('agencyTasksResult333....',agencyTasksResult);
                                      if (agencyTasksResult.success) {
                                        console.log("All tasks isDeleted successfully for indoorCampaignDetailId - " + indoorCampaignDetailId);
                                      } else {
                                        console.log("Unable to destroy agency task for indoorCampaignDetailId - " + indoorCampaignDetailId);
                                      }
                                    });

                                    /*End - isDeleted true for agency task*/


                                    /*start reversal inevntory*/

                                    if (HelperService.isValid(indoorCampaignDetail.anyReversal) && indoorCampaignDetail.anyReversal) {
                                      IndoorCampaignDetailService.updateIndoorCampaignDetails(req, {
                                        reversalId: indoorCampaignDetailId,
                                        campaignId: campaign.id,
                                        agencyId: req.session.loggedUser.parentId
                                      }, { isDeleted: true }, function (callback) {
                                        console.log('callback44444....',callback);
                                        if (callback.success) {
                                          StoreInventoryAvailableService.updateStoreInventories(req, {
                                            reversalId: indoorCampaignDetailId,
                                            campaignid: campaign.id,
                                            agencyId: req.session.loggedUser.parentId
                                          }, { isDeleted: true }, function (callback) {
                                            console.log('callback555....',callback);
                                            if (callback.success) {
                                              CampaignService.updateCampaignReversalPrice(req, campaign, function (callbackResult) {
                                                console.log('callbackResult....',callbackResult);
                                                if (callbackResult.success) {
                                                  console.log("Campaign reversal price updated successfully for campaign - " + campaign.campaignName);
                                                  CampaignService.updateCampaignPrice(req, campaign, function (callbackResult) {
                                                    console.log('callback6666....',callbackResult);
                                                    if (callbackResult.success) {
                                                      console.log("Campaign price updated successfully for campaign - " + campaign.campaignName);
                                                    } else {
                                                      console.log("Unable to update campaign price while destroying indoorCampaignDetailId - " + indoorCampaignDetailId);
                                                      console.log(callback.errMessage);
                                                    }
                                                  });
                                                } else {
                                                  console.log("Unable to update campaign reversal price while destroying indoorCampaignDetailId - " + indoorCampaignDetailId);
                                                  console.log(callback.errMessage);
                                                }
                                              });


                                            } else {
                                              console.log("Unable to destroy storeinventoryavailable for indoorCampaignDetailId - " + indoorCampaignDetailId);
                                            }

                                          })

                                        } else {
                                          console.log("Unable to destroy indoorcampaigndetail for indoorCampaignDetailId - " + indoorCampaignDetailId);
                                        }
                                      });
                                    } else {
                                      CampaignService.updateCampaignPrice(req, campaign, function (callbackResult) {
                                        console.log('callbackResult.....',callbackResult);
                                        if (callbackResult.success) {
                                          console.log("Campaign price updated successfully for campaign - " + campaign.campaignName);
                                        } else {
                                          console.log("Unable to update campaign price while destroying indoorCampaignDetailId - " + indoorCampaignDetailId);
                                          console.log(callbackResult.errMessage);
                                        }
                                      });
                                    }
                                    /*end deleted any reversal*/

                                  } else {
                                    console.log("Unable to destroy indoorcampaigndetail for indoorCampaignDetailId - " + indoorCampaignDetailId);
                                  }

                                });

                              }
                            });
                          });
                        }
                      });
                    });

                    /*Start: Alert Created*/
                    HelperService.createEntryForNotification(campaign, "Inventory deleted from campaign", "Inventory deleted from " + campaign.campaigngType + " Campaign(" + campaign.campaignName + ") for " + campaign.campaignContactPersonName, req.session.agencyId, req.session.agencyuserid, req.session.agencyusername);
                    /*End: Alert Created*/
                    if (HelperService.isValid(storeId) && HelperService.isValid(indoorcampaign)) {
                      /*return res.redirect("/indoorstore/showinvenotry?storeid="+storeId+"&indoorcampaign=" + indoorcampaign);*/
                      return res.json({
                        success: true,
                        url: "/indoorstore/showinvenotry?",
                        query: { storeid: storeId, indoorcampaign: indoorcampaign },
                        message: "Inventory- " + indoorCampaignDetail.inventoryId + " deleted successfully from campaign-" + campaign.campaignName
                      });
                    } else {
                      /*res.redirect('/campaign/showInventoryCampaign?campaignId=' + req.session.indoorcampaignid + "&campaignName=" + req.session.indoorcampaignname + "&campaignShortName=" + req.session.indoorcampaignShortName);*/
                      return res.json({
                        success: true,
                        url: "/campaign/showInventoryCampaign?",
                        query: {
                          campaignId: req.session.indoorcampaignid,
                          campaignName: req.session.indoorcampaignname,
                          campaignShortName: req.session.indoorcampaignShortName
                        },
                        message: "Inventory-" + indoorCampaignDetail.inventoryId + " deleted successfully from campaign- " + campaign.campaignName
                      });
                    }
                  }
                }
              });
            });

          });
        } else {
          return res.json({
            success: false,
            message: "Something went wrong, please contact admin",
          });
        }
      });
    } catch (exception) {
      console.log(exception);
      EmailService.sendErrorAlert(req, exception, function (result) {
      });
      return res.json({
        success: false,
        message: "Something went wrong, please contact admin",
      });
    }
  },