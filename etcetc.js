addInventorytocampaign: function (req, res, next) {
  try {

    var indoorCampaignDetailArray = [];
    var inventoryStartDate = req.param('inventoryStartDate');
    var invoiceDate = req.param('invoiceDate');
    if(invoiceDate!==undefined){
        invoiceDate = new Date(moment(invoiceDate).format("YYYY-MM-DD"));
    }
    if (inventoryStartDate == 'undefined' || inventoryStartDate === 'undefined' || inventoryStartDate === null || typeof inventoryStartDate === 'undefined') {
      inventoryStartDate = 'default';
    } else {
      inventoryStartDate = new Date(inventoryStartDate);
      if (inventoryStartDate == 'Invalid Date') {
        inventoryStartDate = 'default';
      }
    }
    var inventoryEndDate = req.param('inventoryEndDate');
    if (inventoryStartDate == 'undefined' || inventoryEndDate === 'undefined' || inventoryEndDate === null || typeof inventoryEndDate === 'undefined') {
      inventoryEndDate = 'default';
    } else {
      inventoryEndDate = new Date(inventoryEndDate);
      if (inventoryEndDate == 'Invalid Date') {
        inventoryEndDate = 'default';
      }
    }

    var isinventoryDateDefined = 'yes';
    if (inventoryStartDate == 'default' && inventoryEndDate == 'default') {
      isinventoryDateDefined = 'yes';
    } else if (inventoryStartDate == 'default' && inventoryEndDate != 'default') {
      isinventoryDateDefined = 'Please specify the start date';
    } else if (inventoryStartDate != 'default' && inventoryEndDate == 'default') {
      isinventoryDateDefined = 'Please specify the End date';
    } else if (inventoryStartDate.getTime > inventoryEndDate.getTime()) {
      isinventoryDateDefined = 'Start date should be before end date';
    }
    var campaignId = req.param('campaignId');
    var campaignCode = req.param('campaignCode');
    var inventoryId = req.param('inventoryId');
    var inventoryDBId = req.param('inventoryDBId');


    if (inventoryDBId == Object.undefined || inventoryDBId == 'undefined') {
      isinventoryDateDefined = 'Please select the inventory correctly';
    }

    if (campaignId === 'undefined' || campaignId === null || typeof campaignId === 'undefined' || campaignId == 'Select Campaign') {
      isinventoryDateDefined = 'Please select the campaign';
    }

    var tmpInventoryDBID = [];
    var message = [];
    tmpInventoryDBID = inventoryDBId.split(',');
    var newIndoorCampaignDetails = [];
    var failed_list = [];
    if (isinventoryDateDefined != 'yes') {
      var tempinventoryId = req.param('inventoryId');
      message.push(tempinventoryId + ': ' + isinventoryDateDefined);
      failed_list = tmpInventoryDBID;
      return res.json({
        success: false,
        message: message,
        list: newIndoorCampaignDetails,
        failed_list: failed_list,
        campaignId: campaignId
      });
    } else {

      var requestqty = req.param('requestqty');
      if (requestqty === 'undefined' || requestqty == 'undefined' || requestqty === null || typeof requestqty === 'undefined') {
        requestqty = 1;
      }
      var blockqty = 0;
      var currentStoreInventoryAvailableCampaign = '';
      var campaignShortName = req.param('campaignShortName');

      if (campaignShortName === 'undefined' || campaignShortName === null || typeof campaignShortName === 'undefined') {
        campaignShortName = req.session.indoorcampaignShortName;
      }
      var storeId = req.param('storeid');
      if (storeId === 'undefined' || storeId === null || typeof storeId === 'undefined') {
        storeId = req.session.indoorstoreId;
      }
      var agencyid = req.param('agencyId');
      if (agencyid == Object.undefined || agencyid === 'undefined' || agencyid === null || typeof agencyid === 'undefined') {
        agencyid = req.session.agencyId;
      }

      var currentInventoryDetailId = req.param('inventoryDetailId');
      if (currentInventoryDetailId == Object.undefined || currentInventoryDetailId === 'undefined' || currentInventoryDetailId === null || typeof currentInventoryDetailId === 'undefined') {
        currentInventoryDetailId = 'default';
      }
      var isDateChangeRequest = req.param('isDateChangeRequest');//Y
      if (HelperService.isUndefined(isDateChangeRequest)) {
        isDateChangeRequest = 'default'
      }

      var agencyName = req.session.agencyFullName;

      Campaign.findOneById(campaignId, function foundUsers(err, campaign) {
        if (campaign == Object.undefined || campaign === 'undefined' || campaign === null || typeof campaign === 'undefined') {
          console.log('No campaign found for campaignId : ' + campaignId);
          message.push('Campaign is not found ..');
          failed_list = tmpInventoryDBID;
          return res.json({
            success: false,
            message: message,
            list: newIndoorCampaignDetails,
            failed_list: failed_list
          });
        } else {
          var currentIndoorCampaignDetail = 'default';
          var tmpProcessingArray = [];
          tmpProcessingArray.push('default');
          async.forEachSeries(tmpProcessingArray, function (value, callbackTmpArray) {
            if (isDateChangeRequest == 'default') {
              callbackTmpArray();
            } else {
              IndoorCampaignDetail.findOne(currentInventoryDetailId, function foundIndoorCampaignDetail(err, indoorCampaignDetail) {
                if (HelperService.isUndefined(indoorCampaignDetail)) {
                  callbackTmpArray();

                } else {
                  currentIndoorCampaignDetail = indoorCampaignDetail;
                  currentStoreInventoryAvailableCampaign = indoorCampaignDetail.campaignId;
                  callbackTmpArray();
                }
              });
            }
          }, function (err) {
            var totalQty;
            var tmpInventoryDBIDArray = HelperService.removeDuplicateFromArray(tmpInventoryDBID);
            async.forEachSeries(tmpInventoryDBIDArray, function (tmpInventoryDBID, tempInventoryCallback) {

              totalQty = 0;
              StoreInventoryService.getStoreInventoriesByParams(req, {}, {
                agencyId: agencyid,
                id: tmpInventoryDBID,
                isDeleted: false
              }, {}, function (inventoryCallback) {
                if (inventoryCallback.success) {
                  async.forEachSeries(inventoryCallback.storeInventories, function (storeInventory, callbackArray) {
                    totalQty = parseInt(storeInventory.qty);
                    Indoorstore.findOne(storeInventory.storeId, function (err, indoorStore) {
                      storeId = storeInventory.storeId;
                      var isInventoryAvaliable = true;
                      var findCriteria = {};
                      var searchCriteria = {
                        agencyId: req.session.loggedUser.parentId,
                        storeInventoryId: tmpInventoryDBID,
                        campaignstatus: 'C',
                        isDeleted: false,
                      };

                      //check if dates are invalid or default
                      if (inventoryStartDate == 'Invalid Date' || inventoryStartDate == 'default') {
                        inventoryStartDate = campaign.campaignStartDate;
                      }
                      if (inventoryEndDate == 'Invalid Date' || inventoryEndDate == 'default') {
                        inventoryEndDate = campaign.campaignEndDate;
                      }
                      //End check if dates are invalid or default
                      searchCriteria["or"] = [{
                        blockFrom: { '<=': new Date(inventoryEndDate.setHours(0, 0, 0, 0)) },
                        blockTill: { '>=': new Date(inventoryStartDate.setHours(0, 0, 0, 0)) }
                      }, {
                        blockFrom: { '<=': new Date(inventoryStartDate.setHours(0, 0, 0, 0)) },
                        blockTill: { '>=': new Date(inventoryEndDate.setHours(0, 0, 0, 0)) }
                      }, {
                        blockFrom: { '>=': new Date(inventoryStartDate.setHours(0, 0, 0, 0)) },
                        blockTill: { '<=': new Date(inventoryEndDate.setHours(0, 0, 0, 0)) }
                      }
                      ];

                      var sortCriteria = { blockFrom: 1, blockTill: 1 };
                      var runCommand = false;
                      if (campaign.status != 'C') {
                        runCommand = true;
                      }

                      var searchCriteria1 = {
                        agencyId: req.session.loggedUser.parentId,
                        campaignid: campaign.id,
                        storeInventoryId: tmpInventoryDBID,
                        campaignstatus: { '!': 'C' },
                        isDeleted: false,
                      };

                      searchCriteria1["or"] = [{
                        blockFrom: { '<=': new Date(inventoryEndDate.setHours(0, 0, 0, 0)) },
                        blockTill: { '>=': new Date(inventoryStartDate.setHours(0, 0, 0, 0)) }
                      }, {
                        blockFrom: { '<=': new Date(inventoryStartDate.setHours(0, 0, 0, 0)) },
                        blockTill: { '>=': new Date(inventoryEndDate.setHours(0, 0, 0, 0)) }
                      }, {
                        blockFrom: { '>=': new Date(inventoryStartDate.setHours(0, 0, 0, 0)) },
                        blockTill: { '<=': new Date(inventoryEndDate.setHours(0, 0, 0, 0)) }
                      }
                      ];
                      StoreInventoryAvailableService.getData(req, findCriteria, searchCriteria1, sortCriteria, runCommand, function (dataCallback) {

                        StoreInventoryAvailableService.getStoreInventoryAvailableByParams(req, findCriteria, searchCriteria, sortCriteria, function (storeInvAvailableCallback) {
                          var storeInventoryAvailables = storeInvAvailableCallback.storeInventories.concat(dataCallback.storeInventories);
                          if (dataCallback.storeInventories.length > 0) {
                            storeInventoryAvailables.sort(function (a, b) {
                              if (a.blockFrom == null || a.blockFrom == 'undefined' || a.blockFrom === 'undefined'
                                || b.blockFrom == null || b.blockFrom == 'undefined' || b.blockFrom === 'undefined') {
                                return 0;
                              }

                              if (a.blockFrom.getTime() < b.blockFrom.getTime() && a.blockTill.getTime() < b.blockTill.getTime()) {
                                return -1;
                              }
                              if (a.blockFrom.getTime() > b.blockFrom.getTime() && a.blockTill.getTime() > b.blockTill.getTime()) {
                                return 1;
                              }
                              return 0;
                            })
                          }


                          /*StoreInventoryAvailable.findByStoreInventoryId(inventoryDBId, function foundStoreInventoryAvailable(err, storeInventoryAvailables) {*/

                          //if when there is no booking against the inventory and for both cases when campaign is finalized or not finalized //

                          if (storeInventoryAvailables === 'undefined' || storeInventoryAvailables.length === 0) {
                            var campaignstartdate = campaign.campaignStartDate.setHours(0, 0, 0, 0);//set campaign date to inventory date
                            var tempcampaignStartDate = campaign.campaignStartDate.getTime();
                            var campaignenddate = campaign.campaignEndDate.setHours(0, 0, 0, 0);//set campaign date to inventory date please check for one day inventory booking if removing
                            var tempcampaignEndDate = campaign.campaignEndDate.getTime();

                            var inventoryDateExistincampaign = 'yes';
                            if (inventoryStartDate != 'default' && inventoryEndDate != 'default') {
                              var tempinventoryStartDate = inventoryStartDate.getTime();
                              var tempinventoryEndDate = inventoryEndDate.getTime();

                              var first = tempinventoryStartDate >= tempinventoryStartDate;
                              var second = tempinventoryStartDate <= tempcampaignEndDate;
                              var third = tempinventoryEndDate >= tempcampaignStartDate;
                              var forth = tempinventoryEndDate <= tempcampaignEndDate;

                              if (first && second && third && forth) {
                                tempcampaignStartDate = tempinventoryStartDate;
                                tempcampaignEndDate = tempinventoryEndDate;
                              } else {
                                inventoryDateExistincampaign = 'No';
                              }
                            }
                            if (inventoryDateExistincampaign == 'No') {
                              var tempMessage = 'Booking dates should be within campaign period i.e. ' + HelperService.getDateWitnFormat(campaign.campaignStartDate) + ' - ' + HelperService.getDateWitnFormat(campaign.campaignEndDate);
                              /*res.json({
                               Success: false,
                               message: tempMessage
                               });*/

                              message.push(tempMessage);
                              failed_list.push(storeInventory.inventoryId);

                            } else if (storeInventoryAvailables.length >= totalQty && storeInventoryAvailables.campaignid != campaignId) {

                              var tempMessage = 'Inventory ' + storeInventory.inventoryId + ' is not available please check booking info';
                              message.push(tempMessage);
                              failed_list.push(storeInventory.inventoryId);
                              callbackArray();
                            } else {
                              var minDaysFailed = HelperService.checkInventoryMindays(storeInventory, campaign);
                              var minDaysFailed = false;
                              if (minDaysFailed) {
                                message.push(storeInventory.inventoryId + ' is not added to the campaign. This inventory need minimun Order days :' + storeInventory.minimumDays);
                                failed_list.push(storeInventory.inventoryId);
                                callbackArray();
                              } else {

                                var tempInventoryStartDate = new Date(inventoryStartDate.setHours(0, 0, 0, 0));
                                var tempInventoryEndDate = new Date(inventoryEndDate.setHours(0, 0, 0, 0));
                                var scheduleRecordCriteria = { modelId: [storeInventory.id, storeInventory.storeId] };//Either inventory or its store gonna be deactivated
                                scheduleRecordCriteria["or"] = [{ scheduleTime: { "<=": tempInventoryStartDate } }, { scheduleTime: { "<=": tempInventoryEndDate } }];
                                ScheduleRecordService.getScheduleRecords(req, {}, scheduleRecordCriteria, {}, function (scheduleRecordsCallback) {
                                  if (scheduleRecordsCallback.success) {
                                    if (scheduleRecordsCallback.scheduleRecords.length > 0) {
                                      message.push(storeInventory.inventoryId + ' is not added to the campaign. This inventory is scheduled to be deactivated on ' + moment(scheduleRecordsCallback.scheduleRecords[0].scheduleTime).format('DD-MMM-YYYY'));
                                      failed_list.push(storeInventory.inventoryId);
                                      callbackArray();
                                    } else {
                                      /*Start: Alert Created*/
                                      HelperService.createEntryForNotification(campaign, "Inventory added to campaign", "Inventory added to " + campaign.campaigngType + " Campaign(" + campaign.campaignName + ") for " + campaign.campaignContactPersonName, req.session.agencyId, req.session.agencyuserid, req.session.agencyusername);
                                      /*End: Alert Created*/
                                      var currentPrice = 'default';
                                      var currentPriceType = 'default';

                                      if (currentIndoorCampaignDetail != 'default' && currentIndoorCampaignDetail.inventoryDBId == storeInventory.id) {
                                        currentPrice = currentIndoorCampaignDetail.price;
                                        currentPriceType = currentIndoorCampaignDetail.pricetype
                                      }
                                      if (currentPrice == 'default') {
                                        currentPrice = storeInventory.rate;
                                      }

                                      if (currentPriceType == 'default') {
                                        currentPriceType = storeInventory.rateType;
                                      }
                                      var indoorCampaignDetailJSONObj = {
                                        campaignId: campaignId,
                                        agencyId: agencyid,
                                        agencyName: agencyName,
                                        inventoryId: storeInventory.inventoryId,
                                        inventoryDBId: storeInventory.id,
                                        campaignShortName: campaign.campaignShortName,
                                        campaignCode: campaign.campaignCode,
                                        campaignName: campaign.campaignName,
                                        storeId: storeInventory.storeId,
                                        storetype: indoorStore.storesubtype,
                                        storename: indoorStore.name,
                                        storecity: indoorStore.city,
                                        storeAddress: indoorStore.address,
                                        inventorydescription: storeInventory.description,
                                        inventorySection: storeInventory.inventorySection,
                                        level: storeInventory.level,
                                        price: currentPrice,
                                        pricetype: currentPriceType,
                                        inventorycategory: storeInventory.categorytype,
                                        meterialSpecification: storeInventory.meterialSpecification,
                                        photoOne: storeInventory.photoOne,
                                        qty: requestqty,
                                        size: storeInventory.size,
                                        location: storeInventory.location,
                                        phase: storeInventory.phase,
                                        lit: OutDoorHelperService.getLit(storeInventory),
                                        roadFrom: storeInventory.roadFrom,
                                        roadTo: storeInventory.roadTo,
                                        organizationName: campaign.organizationName,
                                        open: 'Y',
                                        fillerCampaign: campaign.fillerCampaign,
                                        mediaType: campaign.campaigngType,
                                        monthlySalesTarget: indoorStore.monthlySalesTarget,
                                        storeCode: indoorStore.code,
                                        storeRegion: indoorStore.region,
                                        accountManagerId: campaign.accountManagerId,
                                        accountManagerName: campaign.campaignContactPersonName,
                                        accountManagerType: campaign.accountManagerType,
                                        inventoryDepartment: storeInventory.inventoryDepartment,
                                        campaignDepartment: campaign.campaignDepartment,
                                        docketCode: storeInventory.docketCode,
                                        campaignActivityCode: campaign.campaignActivityCode,
                                        isDeleted: false,
                                        footFalls: storeInventory.footFalls,
                                        propertyOwnerType: storeInventory.propertyOwnerType
                                      };

                                      if (campaign.status == "A" || campaign.status == "C") {
                                        indoorCampaignDetailJSONObj.userapprove = 'Y';
                                      } else {
                                        indoorCampaignDetailJSONObj.userapprove = 'N';
                                      }

                                      if (campaign.status == "C") {
                                        indoorCampaignDetailJSONObj.status = 'C';
                                      }

                                      if (storeInventory.purchaseRate && storeInventory.purchaseRate != "" && !isNaN(storeInventory.purchaseRate)) {
                                        indoorCampaignDetailJSONObj.purchaseRate = storeInventory.purchaseRate;
                                        indoorCampaignDetailJSONObj.purchaseRateType = storeInventory.purchaseRateType;
                                      }

                                      /*Start: if inventory is in under maintenance*/
                                      if (storeInventory.isUnderMaintainance) {
                                        indoorCampaignDetailJSONObj.isUnderMaintainance = true;
                                        indoorCampaignDetailJSONObj.underMaintainancePeriods = [];
                                        var len = storeInventory.underMaintainancePeriods.length;
                                        indoorCampaignDetailJSONObj.underMaintainancePeriods.push(storeInventory.underMaintainancePeriods[len - 1]);
                                        indoorCampaignDetailJSONObj.currentUnderMaintainanceDate = indoorCampaignDetailJSONObj.underMaintainancePeriods[0].start;
                                        indoorCampaignDetailJSONObj.lastUnderMaintainanceDate = indoorCampaignDetailJSONObj.underMaintainancePeriods[0].start;
                                      }
                                      /*End: if inventory is in under maintenance*/

                                      /* Feature:Entity wise invoicing/billing*/
                                      if (campaign.campaigngType == "Outdoor" && typeof storeInventory.entityId !== "undefined")
                                        indoorCampaignDetailJSONObj.entityId = storeInventory.entityId;

                                      /* Feature:Printing/Mounting Cost*/
                                      if (campaign.campaigngType == "Outdoor" && typeof storeInventory.mountingCost !== "undefined" && typeof storeInventory.printingCost == "undefined") {
                                        indoorCampaignDetailJSONObj.mountingCost = storeInventory.mountingCost;
                                        indoorCampaignDetailJSONObj.printingCost = storeInventory.printingCost;
                                      }

                                      indoorCampaignDetailJSONObj.storeName = indoorStore.name;
                                      AgencyUserService.getAgencyUser(req, campaign.accountManagerId, function (userCallBack) {
                                        if (userCallBack.success) {
                                          indoorCampaignDetailJSONObj.userMonthlySalesTarget1920 = userCallBack.agencyUser.userMonthlySalesTarget1920;
                                          indoorCampaignDetailJSONObj.userMonthlySalesTarget2021 = userCallBack.agencyUser.userMonthlySalesTarget2021;
                                          indoorCampaignDetailJSONObj.userMonthlySalesTarget2122 = userCallBack.agencyUser.userMonthlySalesTarget2122;
                                        }
                                        IndoorCampaignDetail.create(indoorCampaignDetailJSONObj, function indoorCampaignDetailCreated(err, indoorCampaignDetail) {
                                          if (err) console.log(err); else {
                                            /*Start:Add Alert For New Store Created*/
                                            var jsonAlertLog = {};
                                            jsonAlertLog.logAction = "Created";
                                            jsonAlertLog.owner = req.session.loggedUser.role;
                                            jsonAlertLog.ownerName = req.session.loggedUser.name;
                                            jsonAlertLog.entityName = "Indoor Campaign Detail";
                                            jsonAlertLog.description = storeInventory.inventoryId + " has been successfully added to campaign " + campaign.campaignName;
                                            jsonAlertLog.startDate = indoorCampaignDetail.blockFromAsStr;
                                            jsonAlertLog.endDate = indoorCampaignDetail.blockTillAsStr;
                                            jsonAlertLog.id = indoorCampaignDetail.id;
                                            jsonAlertLog.createdAt = indoorStore.createdAt;

                                            HelperService.saveAlertLog(req, {
                                              date: new Date().toLocaleDateString(),
                                              data: jsonAlertLog,
                                              year: new Date().getYear() + 1900,
                                              month: new Date().getMonth() + 1
                                            });
                                            HelperService.saveActivityLog(req, {
                                              date: new Date().toLocaleDateString(),
                                              data: jsonAlertLog,
                                              year: new Date().getYear() + 1900,
                                              month: new Date().getMonth() + 1
                                            });
                                            console.log("**************************************************************");
                                            sails.sockets.broadcast(req.session.loggedUser.parentId + "", "attachedBouncyflip", jsonAlertLog);
                                            console.log("**************************************************************");
                                            /*End:Add Alert For New Store Created*/

                                            if (campaign.campaigngType == 'Outdoor') {
                                              indoorcampaignDetail = OutDoorHelperService.createCampaignDetail(req, storeInventory, indoorCampaignDetail, indoorStore);
                                              indoorcampaignDetail.save();
                                            }

                                            if (campaign.campaigngType == "Outdoor" && typeof storeInventory.mountingCost !== "undefined" && typeof storeInventory.mountingCost !== null) {
                                              indoorCampaignDetail.mountingCost = storeInventory.mountingCost;
                                              indoorCampaignDetail.mountingTax = storeInventory.mountingTax;
                                            }
                                            else {
                                              indoorCampaignDetail.mountingCost = 0;
                                              indoorCampaignDetail.mountingTax = 1;
                                            }

                                            if (campaign.campaigngType == "Outdoor" && typeof storeInventory.printingCost !== "undefined" && typeof storeInventory.printingCost !== null) {
                                              indoorCampaignDetail.printingCost = storeInventory.printingCost;
                                              indoorCampaignDetail.printingTax = storeInventory.printingTax;
                                            }
                                            else {
                                              indoorCampaignDetail.printingCost = 0;
                                              indoorCampaignDetail.printingTax = 1;
                                            }

                                            if (inventoryStartDate != 'default' && inventoryEndDate != 'default') {
                                              indoorCampaignDetail.blockFrom = new Date(inventoryStartDate.getTime());
                                              indoorCampaignDetail.blockTill = new Date(inventoryEndDate.getTime());
                                            } else {
                                              indoorCampaignDetail.blockFrom = campaign.campaignStartDate;
                                              indoorCampaignDetail.blockTill = campaign.campaignEndDate;
                                            }

                                            if (typeof indoorCampaignDetail.blockFrom != typeof undefined) {
                                              indoorCampaignDetail.blockFromMilliSeconds = indoorCampaignDetail.blockFrom.setHours(0, 0, 0, 0);
                                            }
                                            if (typeof indoorCampaignDetail.blockTill != typeof undefined) {
                                              indoorCampaignDetail.blockTillMillSeconds = indoorCampaignDetail.blockTill.setHours(0, 0, 0, 0);
                                            }

                                            var campaignStatus = campaign.status;
                                            if (campaignStatus == Object.undefined || campaignStatus === null || campaignStatus == 'undefined' || campaignStatus === 'undefined') {
                                              campaignStatus = 'D';
                                            }

                                            indoorCampaignDetail.blockFromAsStr = HelperService.getDateWitnFormat(indoorCampaignDetail.blockFrom);
                                            indoorCampaignDetail.blockTillAsStr = HelperService.getDateWitnFormat(indoorCampaignDetail.blockTill);
                                            var StoreInventoryAvailableJSONObj = {
                                              agencyId: agencyid,
                                              campaigntype: campaign.campaigngType,
                                              campaignstatus: campaignStatus,
                                              storeId: storeId,
                                              storeInventoryId: storeInventory.id,
                                              blockFrom: indoorCampaignDetail.blockFrom,
                                              blockTill: indoorCampaignDetail.blockTill,
                                              blockTillAsStr: indoorCampaignDetail.blockTillAsStr,
                                              blockFromAsStr: indoorCampaignDetail.blockFromAsStr,
                                              blockQty: requestqty,
                                              campaignCode: campaign.campaignCode,
                                              campaignname: campaign.campaignName,
                                              campaignid: campaignId,
                                              campaigndetailid: indoorCampaignDetail.id,
                                              status: 'Y',
                                              fillerCampaign: campaign.fillerCampaign,
                                              inventoryId: indoorCampaignDetail.inventoryId,
                                              entityId: storeInventory.entityId,
                                              organizationName: campaign.organizationName,
                                              accountManager: campaign.campaignContactPersonName,
                                              accountManagerType: campaign.accountManagerType,
                                              inventoryDepartment: storeInventory.inventoryDepartment,
                                              campaignDepartment: campaign.campaignDepartment,
                                              isDeleted: false,
                                              footFalls: storeInventory.footFalls
                                            };

                                            /* Feature:Entity wise invoicing/billing*/
                                            if (campaign.campaigngType == "Outdoor" && typeof storeInventory.entityId !== "undefined")
                                              StoreInventoryAvailableJSONObj.entityId = storeInventory.entityId;
                                            StoreInventoryAvailableJSONObj.storeName = indoorStore.name;
                                            StoreInventoryAvailable.create(StoreInventoryAvailableJSONObj,
                                              function StoreInventoryAvailableCreated(err, storeInventoryAvailable) {
                                                var localPrice, globalPrice, localPriceMode;
                                                CampaignPriceStrategy.findOne({ campaignId: indoorCampaignDetail.campaignId }, function (err, campaignPrice) {
                                                  PricingStrategy.findOne({ agencyId: req.session.agencyId }, function (err, pricingStrategy) {
                                                    if (campaignPrice) {
                                                      //isStrategySet = true;
                                                      localPrice = campaignPrice.priceType;
                                                      localPriceMode = campaignPrice.localPriceMode;//e.g HelperService.getShoppersMonthLogicKey
                                                    } else if (pricingStrategy) {
                                                      //isStrategySet = true;
                                                      globalPrice = pricingStrategy.priceType;
                                                      localPriceMode = pricingStrategy.localPriceMode;//e.g HelperService.getShoppersMonthLogicKey
                                                    } else {
                                                      localPrice = undefined;
                                                      globalPrice = undefined;
                                                      localPriceMode = "";
                                                    }
                                                    indoorCampaignDetail.localPrice = localPrice;
                                                    indoorCampaignDetail.globalPrice = globalPrice;
                                                    indoorCampaignDetail.localPriceMode = localPriceMode;

                                                    var callback = HelperService.getBookedInventoryPrice(req, indoorCampaignDetail, {
                                                      startDate: indoorCampaignDetail.blockFrom,
                                                      endDate: indoorCampaignDetail.blockTill,
                                                    });

                                                    var calculatePrice = callback.totalInventoryAmount; //HelperService.getPriceForInventory(storeInventory, campaign, parseInt(requestqty), indoorCampaignDetail);
                                                    var tmppricebeforediscount = calculatePrice;
                                                    indoorCampaignDetail.pricebeforediscount = tmppricebeforediscount;
                                                    if (currentIndoorCampaignDetail != 'default' && currentIndoorCampaignDetail.inventoryDBId == storeInventory.id) {
                                                      var tmpDiscount = currentIndoorCampaignDetail.discount;
                                                      if (HelperService.isUndefined(tmpDiscount) || tmpDiscount == 0 || tmpDiscount == 'null' || tmpDiscount == '0' || isNaN(tmpDiscount)) {
                                                        tmpDiscount = 0;
                                                      } else {
                                                        tmpDiscount = parseFloat(tmpDiscount);
                                                        calculatePrice = parseFloat(calculatePrice);
                                                        var discountprice = calculatePrice - ((calculatePrice * tmpDiscount) / 100);
                                                        discountprice = discountprice;//.toFixed(2);
                                                        // discountprice = Math.ceil(discountprice);
                                                        calculatePrice = discountprice;
                                                        tmpDiscount = tmpDiscount;//.toFixed(2);
                                                        indoorCampaignDetail.discount = tmpDiscount;
                                                      }
                                                    }

                                                    var tax = HelperService.calculateTaxForInventory(calculatePrice, campaign);
                                                    indoorCampaignDetail.calculatedPrice = calculatePrice;
                                                    indoorCampaignDetail.tax = tax;
                                                    indoorCampaignDetail.storeInventoryAvailableId = storeInventoryAvailable.id;
                                                    var digitalInventories = HelperService.getDigitalInventory();
                                                    if (digitalInventories.indexOf(storeInventory.categorytype) != -1) {
                                                      indoorCampaignDetail.size = storeInventory.area;
                                                    }
                                                    indoorCampaignDetail.blockFrom = new Date(moment(indoorCampaignDetail.blockFrom).format("YYYY-MM-DD"));
                                                    indoorCampaignDetail.blockTill = new Date(moment(indoorCampaignDetail.blockTill).format("YYYY-MM-DD"));
                                                    indoorCampaignDetail.save(function (err) {
                                                      if (err) console.log(err);
                                                      else {
                                                        /*Start - Add city to campaign.city */
                                                        if (campaign.city.indexOf(indoorCampaignDetail.storecity) == -1)
                                                          campaign.city.push(indoorCampaignDetail.storecity);
                                                        /*End - Add city to campaign.city*/
                                                        if (campaign.status == 'C') {

                                                          UserStoreLinkService.getUserStoreLinksByParams(req, { select: ['agencyUserId'] }, {
                                                            storeId: indoorCampaignDetail.storeId
                                                          }, function (userStoreLinksCallback) {
                                                            var userIds = [];
                                                            if (userStoreLinksCallback.success) {
                                                              userStoreLinksCallback.userStoreLinks.forEach(function (userLink) {
                                                                userIds.push(userLink.agencyUserId);
                                                              });
                                                            }

                                                            AgencyUserService.getAgencyUsersByParams(req, { select: ['id', 'userName'] }, {
                                                              isActive: 'Y',
                                                              agencyId: req.session.loggedUser.parentId,
                                                              role: "Executive",
                                                              department: "Operations",
                                                              id: userIds
                                                            }, {}, function (agencyusersCallback) {
                                                              var assignId = "-1", assignName = "";
                                                              if (agencyusersCallback.agencyUsers) {//Auto assignment of tasks, refer US1097
                                                                if (agencyusersCallback.agencyUsers.length > 0 && (req.session.loggedUser.parentId == "5948ccb31a9ca7ed37ba1a4a" || req.session.loggedUser.parentId == "5b7a8a3499b5d2b32448a52f")) {
                                                                  assignId = agencyusersCallback.agencyUsers[0].id;
                                                                  assignName = agencyusersCallback.agencyUsers[0].userName;
                                                                }
                                                              }

                                                              AgencyTaskService.createInventoryTasks(req, campaign.auditFrequency, indoorCampaignDetail, assignId, assignName);

                                                            });
                                                          });
                                                        }
                                                        //console.log("1. I should be creating tasks");
                                                      }
                                                    });

                                                    if (campaign.status == 'C') {
                                                      var finalPrice = campaign.finalPrice;
                                                      finalPrice = parseFloat(finalPrice);
                                                      var finaltax = campaign.finaltax;
                                                      finaltax = parseFloat(finaltax);

                                                      var finalpricewithtax = campaign.finalpricewithtax;
                                                      finalpricewithtax = parseFloat(finalpricewithtax);

                                                      calculatePrice = parseFloat(calculatePrice);
                                                      tax = parseFloat(tax);

                                                      finalPrice = finalPrice + calculatePrice;
                                                      finaltax = finaltax + tax;

                                                      finalpricewithtax = finalpricewithtax + calculatePrice + tax;

                                                      finaltax = parseFloat(finaltax);

                                                      campaign.finalPrice = finalPrice;//.toFixed(2);
                                                      campaign.finaltax = finaltax;//.toFixed(2)
                                                      campaign.finalpricewithtax = finalpricewithtax;//.toFixed(2);

                                                    }
                                                    if (campaign.campaigngType == "Outdoor") {
                                                      CampaignService.setMountingCost(req, indoorCampaignDetail, campaign);
                                                      CampaignService.setPrintingCost(req, indoorCampaignDetail, campaign);
                                                    }

                                                    HelperService.setTotalInventoryTypeInCampaign(req, campaign, storeInventory.categorytype, calculatePrice);
                                                    HelperService.setTotalNumberOfPropertyForTransitCampaign(campaign, indoorStore, storeInventory.categorytype);
                                                    if (campaign.campaigngType == "Outdoor" && typeof storeInventory.entityId !== "undefined")
                                                      HelperService.setEntityTypeInCampaign(campaign, storeInventory.entityId);
                                                    if (campaign.stores) {
                                                      if (campaign.stores.indexOf(storeId) == -1) {
                                                        campaign.stores.push(storeId);
                                                      }
                                                    } else {
                                                      campaign.stores = new Array(storeId);
                                                    }
                                                    campaign.finalFootFalls += storeInventory.footFalls;
                                                    campaign.campaignStartDate = new Date(moment(campaign.campaignStartDate).format("YYYY-MM-DD"));
                                                    campaign.campaignEndDate = new Date(moment(campaign.campaignEndDate).format("YYYY-MM-DD"));
                                                    console.log('Campaign addded succesfully ===')
                                                    console.log('campaign...Save....11',campaign);
                                                    campaign.save();

                                                    if (currentIndoorCampaignDetail == 'default') {//Rule 1 - Add inventory to campaign
                                                      message.push(storeInventory.inventoryId + " added to the campaign successfully");
                                                    } else {//Rule 2 - Update inventory booking dates
                                                      message.push(storeInventory.inventoryId + " booking dates have been successfully updated");
                                                    }

                                                    newIndoorCampaignDetails.push(indoorCampaignDetail);
                                                    callbackArray();


                                                  });
                                                });
                                              });
                                          }
                                        });

                                      });
                                    }
                                  } else {
                                    callbackArray();
                                  }
                                });
                              }
                            }

                          } else {

                            var campaignstartdate = campaign.campaignStartDate.setHours(0, 0, 0, 0);//set campaign date to inventory date

                            var tempcampaignStartDate = campaign.campaignStartDate.getTime();
                            var campaignenddate = campaign.campaignEndDate.setHours(0, 0, 0, 0);//set campaign date to inventory date please check for one day inventory booking if removing

                            var tempcampaignEndDate = campaign.campaignEndDate.getTime();

                            var inventoryDateExistincampaign = 'yes';
                            if (inventoryStartDate != 'default' && inventoryEndDate != 'default') {

                              var tempinventoryStartDate = inventoryStartDate.getTime();
                              var tempinventoryEndDate = inventoryEndDate.getTime();

                              var first = tempinventoryStartDate >= tempinventoryStartDate;
                              var second = tempinventoryStartDate <= tempcampaignEndDate;
                              var third = tempinventoryEndDate >= tempcampaignStartDate;
                              var forth = tempinventoryEndDate <= tempcampaignEndDate;

                              if (first && second && third && forth) {
                                tempcampaignStartDate = tempinventoryStartDate;
                                tempcampaignEndDate = tempinventoryEndDate;
                              } else {
                                inventoryDateExistincampaign = 'No';
                              }
                            }
                            if (inventoryDateExistincampaign == 'No') {
                              var tempMessage = 'Booking period should be within campaign period i.e. ' + HelperService.getDateWitnFormat(campaign.campaignStartDate) + '-' + HelperService.getDateWitnFormat(campaign.campaignEndDate);
                              /*res.json({
                               Success: false,
                               message: tempMessage
                               });*/

                              message.push(tempMessage);
                              failed_list.push(storeInventory.inventoryId);
                              callbackArray();
                            } else if (storeInventoryAvailables.length >= totalQty && currentStoreInventoryAvailableCampaign != campaignId) {

                              var tempMessage = 'Inventory ' + storeInventory.inventoryId + ' is not available please check booking info';
                              message.push(tempMessage);
                              failed_list.push(storeInventory.inventoryId);
                              callbackArray();
                            } else {
                              var fillarIndoorCampaignIds = [];
                              var fillarCampaignMessage = [];
                              var ignoreIds = [];
                              storeInventoryAvailables.push({
                                blockFrom: new Date(inventoryStartDate.setHours(0, 0, 0, 0)),
                                blockTill: new Date(inventoryEndDate.setHours(0, 0, 0, 0))
                              });
                              var overlapResult = HelperService.findOverlaps(req, storeInventoryAvailables, currentInventoryDetailId, campaignId);
                              var overlaps = overlapResult.result;
                              if (overlapResult.deleteIndex == -1) {
                                storeInventoryAvailables.splice(0, 1);
                              } else {
                                storeInventoryAvailables.splice(overlapResult.deleteIndex, 1);
                              }
                              for (var i = 0; i < overlaps.ranges.length; i++) {
                                if (overlaps.ranges[i].previous.campaignid != campaignId) {
                                  var tempStoreInventoryAvailable = storeInventoryAvailables[overlaps.ranges[i].pIndex];
                                  if (tempStoreInventoryAvailable && ignoreIds.indexOf(tempStoreInventoryAvailable.id) == -1) {
                                    blockqty += tempStoreInventoryAvailable.blockQty;
                                    ignoreIds.push(tempStoreInventoryAvailable.id);
                                  }

                                  tempStoreInventoryAvailable = storeInventoryAvailables[overlaps.ranges[i].cIndex];
                                  if (tempStoreInventoryAvailable && ignoreIds.indexOf(tempStoreInventoryAvailable.id) == -1) {
                                    blockqty += tempStoreInventoryAvailable.blockQty;
                                    ignoreIds.push(tempStoreInventoryAvailable.id);
                                  }
                                }
                              }
                              for (var i = 0; i < storeInventoryAvailables.length; i++) {//bookings which don't have overlappings with other periods
                                if (ignoreIds.indexOf(storeInventoryAvailables[i].id) == -1) {

                                  // if(storeInventoryAvailables[i].campaignid!=campaignId){
                                  blockqty += storeInventoryAvailables[i].blockQty;
                                  // }

                                }
                              }

                              StoreInventory.findOne(storeInventory.id, function foundUsers(err, storeInventory) {
                                Indoorstore.findOne(storeInventory.storeId, function (err, indoorStore) {
                                  var minDaysFailed = HelperService.checkInventoryMindays(storeInventory, campaign);
                                  var minDaysFailed = false;
                                  if (minDaysFailed) {
                                    /*res.json({
                                     Success: false,
                                     message: inventoryId + ' is not added to the campaign. This inventory need minimun Order days :' + storeInventory.minimumDays
                                     });*/
                                    var tempMessage = inventoryId + ' is not added to the campaign. This inventory need minimun Order days :' + storeInventory.minimumDays;
                                    message.push(tempMessage);
                                    failed_list.push(storeInventory.inventoryId);
                                  } else {
                                    if (requestqty > (totalQty - blockqty) && currentStoreInventoryAvailableCampaign != campaignId) {//Runs only for rule 1
                                      console.log(storeInventory.inventoryId + ' is not avaliable. Already booked for other campaign.Total available qty is :' + (totalQty - blockqty));
                                      var tempMessage = storeInventory.inventoryId + ' is not avaliable. Already booked for other campaign. Total available qty is :' + ((totalQty - blockqty) < 0 ? 0 : (totalQty - blockqty));
                                      message.push(tempMessage);
                                      failed_list.push(storeInventory.inventoryId);
                                      callbackArray();
                                    } else {
                                      var tempInventoryStartDate = new Date(inventoryStartDate.setHours(0, 0, 0, 0));
                                      var tempInventoryEndDate = new Date(inventoryEndDate.setHours(0, 0, 0, 0));
                                      var scheduleRecordCriteria = { modelId: storeInventory.id };
                                      scheduleRecordCriteria["or"] = [{ scheduleTime: { "<=": tempInventoryStartDate } }, { scheduleTime: { "<=": tempInventoryEndDate } }];
                                      ScheduleRecordService.getScheduleRecords(req, {}, scheduleRecordCriteria, {}, function (scheduleRecordsCallback) {
                                        if (scheduleRecordsCallback.success) {
                                          if (scheduleRecordsCallback.scheduleRecords.length > 0) {
                                            message.push(storeInventory.inventoryId + ' is not added to the campaign. This inventory is scheduled to be deactivated on ' + moment(scheduleRecordsCallback.scheduleRecords[0].scheduleTime).format('DD-MMM-YYYY'));
                                            failed_list.push(storeInventory.inventoryId);
                                            callbackArray();
                                          } else {
                                            /*Start: Alert Created*/
                                            HelperService.createEntryForNotification(campaign, "Inventory added to campaign", "Inventory added to " + campaign.campaigngType + " Campaign(" + campaign.campaignName + ") for " + campaign.campaignContactPersonName, req.session.agencyId, req.session.agencyuserid, req.session.agencyusername);
                                            /*End: Alert Created*/

                                            var currentPrice = 'default';
                                            var currentPriceType = 'default';

                                            if (currentIndoorCampaignDetail != 'default' && currentIndoorCampaignDetail.inventoryDBId == storeInventory.id) {
                                              currentPrice = currentIndoorCampaignDetail.price;
                                              currentPriceType = currentIndoorCampaignDetail.pricetype
                                            }
                                            if (currentPrice == 'default') {
                                              currentPrice = storeInventory.rate;
                                            }

                                            if (currentPriceType == 'default') {
                                              currentPriceType = storeInventory.rateType;
                                            }

                                            var inventoryCampaignDetailJson = {
                                              campaignId: campaignId,
                                              campaignName: campaign.campaignName,
                                              agencyId: agencyid,
                                              agencyName: agencyName,
                                              inventoryId: storeInventory.inventoryId,
                                              inventoryDBId: storeInventory.id,
                                              campaignCode: campaign.campaignCode,
                                              campaignShortName: campaign.campaignShortName,
                                              storeId: storeInventory.storeId,
                                              storetype: indoorStore.storesubtype,
                                              storename: indoorStore.name,
                                              storecity: indoorStore.city,
                                              storeAddress: indoorStore.address,
                                              inventorydescription: storeInventory.description,
                                              inventorySection: storeInventory.inventorySection,
                                              level: storeInventory.level,
                                              price: currentPrice,
                                              pricetype: currentPriceType,
                                              inventorycategory: storeInventory.categorytype,
                                              meterialSpecification: storeInventory.meterialSpecification,
                                              photoOne: storeInventory.photoOne,
                                              qty: requestqty,
                                              size: storeInventory.size,
                                              location: storeInventory.location,
                                              phase: storeInventory.phase,
                                              lit: OutDoorHelperService.getLit(storeInventory),
                                              roadFrom: storeInventory.roadFrom,
                                              roadTo: storeInventory.roadTo,
                                              organizationName: campaign.organizationName,
                                              open: 'Y',
                                              fillerCampaign: campaign.fillerCampaign,
                                              fillarIndoorCampaignIds: fillarIndoorCampaignIds,
                                              fillarCampaignMessage: fillarCampaignMessage,
                                              mediaType: campaign.campaigngType,
                                              monthlySalesTarget: indoorStore.monthlySalesTarget,
                                              storeCode: indoorStore.code,
                                              storeRegion: indoorStore.region,
                                              accountManagerId: campaign.accountManagerId,
                                              accountManagerName: campaign.campaignContactPersonName,
                                              accountManagerType: campaign.accountManagerType,
                                              inventoryDepartment: storeInventory.inventoryDepartment,
                                              campaignDepartment: campaign.campaignDepartment,
                                              docketCode: storeInventory.docketCode,
                                              campaignActivityCode: campaign.campaignActivityCode,
                                              isDeleted: false,
                                              footFalls: storeInventory.footFalls,
                                              propertyOwnerType: storeInventory.propertyOwnerType


                                            };

                                            if (campaign.status == "A" || campaign.status == "C") {
                                              inventoryCampaignDetailJson.userapprove = 'Y';
                                            } else {
                                              inventoryCampaignDetailJson.userapprove = 'N';
                                            }

                                            if (campaign.status == "C") {
                                              inventoryCampaignDetailJson.status = 'C';
                                            }

                                            if (storeInventory.purchaseRate && storeInventory.purchaseRate != "" && !isNaN(storeInventory.purchaseRate)) {
                                              inventoryCampaignDetailJson.purchaseRate = storeInventory.purchaseRate;
                                              inventoryCampaignDetailJson.purchaseRateType = storeInventory.purchaseRateType;
                                            }

                                            if (campaign.campaigngType == "Outdoor" && typeof storeInventory.entityId !== "undefined")
                                              inventoryCampaignDetailJson.entityId = storeInventory.entityId;

                                            // if(campaign.campaigngType=="Outdoor" && typeof storeInventory.mountingCost!=="undefined" && typeof storeInventory.printingCost!=="undefined"){
                                            //   inventoryCampaignDetailJson.mountingCost=storeInventory.mountingCost;
                                            //   inventoryCampaignDetailJson.printingCost=storeInventory.printingCost;
                                            // }


                                            AgencyUserService.getAgencyUser(req, campaign.accountManagerId, function (userCallBack) {
                                              if (userCallBack.success) {
                                                inventoryCampaignDetailJson.userMonthlySalesTarget1920 = userCallBack.agencyUser.userMonthlySalesTarget1920;
                                                inventoryCampaignDetailJson.userMonthlySalesTarget2021 = userCallBack.agencyUser.userMonthlySalesTarget2021;
                                                inventoryCampaignDetailJson.userMonthlySalesTarget2122 = userCallBack.agencyUser.userMonthlySalesTarget2122;
                                              }
                                              indoorCampaignDetailArray.push(inventoryCampaignDetailJson);

                                              IndoorCampaignDetail.create(inventoryCampaignDetailJson, function indoorCampaignDetailCreated(err, indoorCampaignDetail) {
                                                if (err) console.log(err); else {
                                                  /*Start:Add Alert For New Store Created*/
                                                  var jsonAlertLog = {};
                                                  jsonAlertLog.logAction = "Created";
                                                  jsonAlertLog.owner = req.session.loggedUser.role;
                                                  jsonAlertLog.ownerName = req.session.loggedUser.name;
                                                  jsonAlertLog.entityName = "Indoor Campaign Detail";
                                                  if (currentIndoorCampaignDetail == 'default') {//Rule 1 - Add inventory to campaign
                                                    jsonAlertLog.description = storeInventory.inventoryId + " has been successfully added to campaign - " + campaign.campaignName;
                                                  } else {//Rule 2 - Update inventory booking dates
                                                    jsonAlertLog.description = storeInventory.inventoryId + " booking dates have been successfully updated";
                                                  }

                                                  jsonAlertLog.startDate = indoorCampaignDetail.blockFromAsStr;
                                                  jsonAlertLog.endDate = indoorCampaignDetail.blockTillAsStr;
                                                  jsonAlertLog.id = indoorCampaignDetail.id;
                                                  jsonAlertLog.createdAt = indoorStore.createdAt;

                                                  HelperService.saveAlertLog(req, {
                                                    date: new Date().toLocaleDateString(),
                                                    data: jsonAlertLog,
                                                    year: new Date().getYear() + 1900,
                                                    month: new Date().getMonth() + 1
                                                  });
                                                  HelperService.saveActivityLog(req, {
                                                    date: new Date().toLocaleDateString(),
                                                    data: jsonAlertLog,
                                                    year: new Date().getYear() + 1900,
                                                    month: new Date().getMonth() + 1
                                                  });
                                                  console.log("**************************************************************");
                                                  sails.sockets.broadcast(req.session.loggedUser.parentId + "", "attachedBouncyflip", jsonAlertLog);
                                                  console.log("**************************************************************");
                                                  /*End:Add Alert For New Store Created*/
                                                  if (campaign.campaigngType == 'Outdoor') {
                                                    indoorcampaignDetail = OutDoorHelperService.createCampaignDetail(req, storeInventory, indoorCampaignDetail, indoorStore);
                                                    indoorcampaignDetail.save();
                                                  }

                                                  indoorCampaignDetail.blockFrom = new Date(tempcampaignStartDate);
                                                  indoorCampaignDetail.blockTill = new Date(tempcampaignEndDate);
                                                  indoorCampaignDetail.blockFromAsStr = HelperService.getDateWitnFormat(indoorCampaignDetail.blockFrom);
                                                  indoorCampaignDetail.blockTillAsStr = HelperService.getDateWitnFormat(indoorCampaignDetail.blockTill);

                                                  if (typeof indoorCampaignDetail.blockFrom != typeof undefined) {
                                                    indoorCampaignDetail.blockFromMilliSeconds = indoorCampaignDetail.blockFrom.setHours(0, 0, 0, 0);
                                                  }
                                                  if (typeof indoorCampaignDetail.blockTill != typeof undefined) {
                                                    indoorCampaignDetail.blockTillMillSeconds = indoorCampaignDetail.blockTill.setHours(0, 0, 0, 0);
                                                  }

                                                  var campaignStatus = campaign.status;
                                                  if (campaignStatus == Object.undefined || campaignStatus === null || campaignStatus == 'undefined' || campaignStatus === 'undefined') {
                                                    campaignStatus = 'D';
                                                  }

                                                  var storeInventoryJson = {
                                                    agencyId: agencyid,
                                                    campaigntype: campaign.campaigngType,
                                                    campaignstatus: campaignStatus,
                                                    storeId: storeId,
                                                    storeInventoryId: storeInventory.id,
                                                    blockFrom: indoorCampaignDetail.blockFrom,
                                                    blockTill: indoorCampaignDetail.blockTill,
                                                    blockTillAsStr: indoorCampaignDetail.blockTillAsStr,
                                                    blockFromAsStr: indoorCampaignDetail.blockFromAsStr,
                                                    blockQty: requestqty,
                                                    campaignCode: campaign.campaignCode,
                                                    campaignname: campaign.campaignName,
                                                    campaignid: campaignId,
                                                    campaigndetailid: indoorCampaignDetail.id,
                                                    status: 'Y',
                                                    fillerCampaign: campaign.fillerCampaign,
                                                    inventoryId: indoorCampaignDetail.inventoryId,
                                                    organizationName: campaign.organizationName,
                                                    accountManager: campaign.campaignContactPersonName,
                                                    inventoryDepartment: storeInventory.inventoryDepartment,
                                                    campaignDepartment: campaign.campaignDepartment,
                                                    isDeleted: false,
                                                    footFalls: storeInventory.footFalls
                                                  };

                                                  if (campaign.campaigngType == "Outdoor" && typeof storeInventory.entityId !== "undefined")
                                                    storeInventoryJson.entityId = storeInventory.entityId;

                                                  StoreInventoryAvailable.create(storeInventoryJson,
                                                    function StoreInventoryAvailableCreated(err, storeInventoryAvailable) {
                                                      var localPrice, globalPrice, localPriceMode;
                                                      CampaignPriceStrategy.findOne({ campaignId: indoorCampaignDetail.campaignId }, function (err, campaignPrice) {
                                                        PricingStrategy.findOne({ agencyId: req.session.agencyId }, function (err, pricingStrategy) {
                                                          if (campaignPrice) {
                                                            //isStrategySet = true;
                                                            localPrice = campaignPrice.priceType;
                                                            localPriceMode = campaignPrice.localPriceMode;//e.g HelperService.getShoppersMonthLogicKey
                                                          } else if (pricingStrategy) {
                                                            //isStrategySet = true;
                                                            globalPrice = pricingStrategy.priceType;
                                                            localPriceMode = pricingStrategy.localPriceMode;//e.g HelperService.getShoppersMonthLogicKey
                                                          } else {
                                                            localPrice = undefined;
                                                            globalPrice = undefined;
                                                            localPriceMode = "";
                                                          }
                                                          indoorCampaignDetail.localPrice = localPrice;
                                                          indoorCampaignDetail.globalPrice = globalPrice;
                                                          indoorCampaignDetail.localPriceMode = localPriceMode;
                                                          var callback = HelperService.getBookedInventoryPrice(req, indoorCampaignDetail, {
                                                            startDate: indoorCampaignDetail.blockFrom,
                                                            endDate: indoorCampaignDetail.blockTill
                                                          });
                                                          var calculatePrice = callback.totalInventoryAmount; //HelperService.getPriceForInventory(storeInventory, campaign, parseInt(requestqty), indoorCampaignDetail);

                                                          var tmppricebeforediscount = calculatePrice;
                                                          indoorCampaignDetail.pricebeforediscount = tmppricebeforediscount;
                                                          if (currentIndoorCampaignDetail != 'default' && currentIndoorCampaignDetail.inventoryDBId == storeInventory.id) {
                                                            var tmpDiscount = currentIndoorCampaignDetail.discount;
                                                            if (HelperService.isUndefined(tmpDiscount) || tmpDiscount == 0 || tmpDiscount == 'null' || tmpDiscount == '0' || isNaN(tmpDiscount)) {
                                                              tmpDiscount = 0;
                                                            } else {
                                                              tmpDiscount = parseFloat(tmpDiscount);
                                                              calculatePrice = parseFloat(calculatePrice);
                                                              // console.log('price of invetory  - > :' + calculatePrice);
                                                              var discountprice = calculatePrice - ((calculatePrice * tmpDiscount) / 100);
                                                              /*console.log('discountOnIndoorInventory - > discountprice :' + discountprice);
                                                              console.log('discountOnIndoorInventory - > discountprice parsed :' + parseFloat(discountprice));*/
                                                              discountprice = discountprice;//.toFixed(2);
                                                              //  discountprice = Math.ceil(discountprice);
                                                              calculatePrice = discountprice;
                                                              tmpDiscount = tmpDiscount;//.toFixed(2);
                                                              indoorCampaignDetail.discount = tmpDiscount;
                                                            }
                                                          }
                                                          var tax = HelperService.calculateTaxForInventory(calculatePrice, campaign);
                                                          console.log('tax ### :' + tax);
                                                          indoorCampaignDetail.tax = tax;
                                                          indoorCampaignDetail.calculatedPrice = calculatePrice;
                                                          console.log('#### campaignstatus - >' + storeInventoryAvailable.campaignstatus);
                                                          indoorCampaignDetail.storeInventoryAvailableId = storeInventoryAvailable.id;

                                                          if (campaign.status == 'C') {
                                                            var finalPrice = campaign.finalPrice;
                                                            finalPrice = parseFloat(finalPrice);
                                                            var finaltax = campaign.finaltax;
                                                            finaltax = parseFloat(finaltax);

                                                            var finalpricewithtax = campaign.finalpricewithtax;
                                                            finalpricewithtax = parseFloat(finalpricewithtax);

                                                            calculatePrice = parseFloat(calculatePrice);
                                                            tax = parseFloat(tax);

                                                            finalPrice = finalPrice + calculatePrice;
                                                            finaltax = finaltax + tax;

                                                            finalpricewithtax = finalpricewithtax + calculatePrice + tax;

                                                            finaltax = parseFloat(finaltax);
                                                            console.log("here for Final Tax  ")

                                                            campaign.finalPrice = finalPrice;//.toFixed(2);
                                                            campaign.finaltax = finaltax;//.toFixed(2)
                                                            campaign.finalpricewithtax = finalpricewithtax;//.toFixed(2);
                                                            if (fillarIndoorCampaignIds.length > 0) {
                                                              // console.log('Processing the filler campaign while add inventory to campaign');
                                                              OutDoorHelperService.processingFillerCampaign(indoorCampaignDetail, fillarIndoorCampaignIds, 'default');
                                                            }
                                                          }


                                                          if (campaign.stores) {
                                                            if (campaign.stores.indexOf(storeId) == -1) {
                                                              campaign.stores.push(storeId);
                                                            }

                                                          } else {
                                                            campaign.stores = new Array(storeId);
                                                          }


                                                          if (campaign.campaigngType == "Outdoor") {
                                                            CampaignService.setMountingCost(req, indoorCampaignDetail, campaign);
                                                            CampaignService.setPrintingCost(req, indoorCampaignDetail, campaign);
                                                          }

                                                          HelperService.setTotalInventoryTypeInCampaign(req, campaign, storeInventory.categorytype, calculatePrice);
                                                          HelperService.setTotalNumberOfPropertyForTransitCampaign(campaign, indoorStore, storeInventory.categorytype);
                                                          var digitalInventories = HelperService.getDigitalInventory();
                                                          if (digitalInventories.indexOf(storeInventory.categorytype) != -1) {
                                                            indoorCampaignDetail.size = storeInventory.area;
                                                          }
                                                          indoorCampaignDetail.blockFrom = new Date(moment(indoorCampaignDetail.blockFrom).format("YYYY-MM-DD"));
                                                          indoorCampaignDetail.blockTill = new Date(moment(indoorCampaignDetail.blockTill).format("YYYY-MM-DD"));
                                                          if(invoiceDate!==undefined){
                                                            indoorCampaignDetail.invoiceDate =invoiceDate;
                                                          }
                                                          indoorCampaignDetail.save(function (err) {
                                                            if (err) console.log(err);
                                                            else {
                                                              /*Start - Add city to campaign.city */
                                                              if (campaign.city.indexOf(indoorCampaignDetail.storecity) == -1)
                                                                campaign.city.push(indoorCampaignDetail.storecity);
                                                              /*End - Add city to campaign.city*/
                                                              console.log("2. I should be creating tasks");
                                                              if (campaign.status == 'C') {

                                                                UserStoreLinkService.getUserStoreLinksByParams(req, { select: ['agencyUserId'] }, {
                                                                  storeId: indoorCampaignDetail.storeId
                                                                }, function (userStoreLinksCallback) {

                                                                  var userIds = [];
                                                                  if (userStoreLinksCallback.success) {
                                                                    userStoreLinksCallback.userStoreLinks.forEach(function (userLink) {
                                                                      userIds.push(userLink.agencyUserId);
                                                                    });
                                                                  }

                                                                  AgencyUserService.getAgencyUsersByParams(req, { select: ['id'] }, {
                                                                    isActive: 'Y',
                                                                    agencyId: req.session.loggedUser.parentId,
                                                                    role: "Executive",
                                                                    department: "Operations",
                                                                    id: userIds
                                                                  }, {}, function (agencyusersCallback) {
                                                                    var assignId = "-1", assignName = "";
                                                                    if (agencyusersCallback.agencyUsers) {
                                                                      if (agencyusersCallback.agencyUsers.length > 0 && (req.session.loggedUser.parentId == "5948ccb31a9ca7ed37ba1a4a" || req.session.loggedUser.parentId == "5b7a8a3499b5d2b32448a52f")) {
                                                                        assignId = agencyusersCallback.agencyUsers[0].id;
                                                                        assignName = agencyusersCallback.agencyUsers[0].userName;
                                                                      }
                                                                    }

                                                                    AgencyTaskService.createInventoryTasks(req, campaign.auditFrequency, indoorCampaignDetail, assignId, assignName);

                                                                  });
                                                                });
                                                              }
                                                              console.log("2. I should have created tasks");
                                                            }
                                                          });


                                                          campaign.fillarCampaignMessage = fillarCampaignMessage;
                                                          campaign.finalFootFalls += storeInventory.footFalls;
                                                          campaign.campaignStartDate = new Date(moment(campaign.campaignStartDate).format("YYYY-MM-DD"));
                                                          campaign.campaignEndDate = new Date(moment(campaign.campaignEndDate).format("YYYY-MM-DD"));
                                                          console.log('campaign...Save....22',campaign);
                                                          campaign.save();

                                                          if (currentIndoorCampaignDetail == 'default') {//Rule 1 - Add inventory to campaign
                                                            message.push(storeInventory.inventoryId + " added to the campaign successfully");
                                                          } else {//Rule 2 - Update inventory booking dates
                                                            message.push(storeInventory.inventoryId + " booking dates have been successfully updated");
                                                          }
                                                          newIndoorCampaignDetails.push(indoorCampaignDetail);
                                                          callbackArray();

                                                        });
                                                      });
                                                    });
                                                }
                                              });
                                            });
                                          }
                                        } else {
                                          callbackArray();
                                        }
                                      });
                                    }
                                  }
                                });
                              });

                            }
                          }
                        });
                      });
                    });

                  }, function (err) {
                    tempInventoryCallback();
                  });
                } else {
                  return res.json({
                    success: false,
                    message: "Something went wrong, please try again or contact admin"
                  });
                }
              });

            }, function (err) {
              console.log('Return the value fron Add to campaign :');
              console.log(message);
              tmpProcessingArray = [];
              tmpProcessingArray.push('default');
              async.forEachSeries(tmpProcessingArray, function (value, callbackArray) {

                if (isDateChangeRequest == 'default') {//Rule 1
                  campaign.save();
                  callbackArray();
                } else if (currentIndoorCampaignDetail == 'default') {//Rule 1
                  campaign.save();
                  callbackArray();
                } else if (requestqty > (totalQty - blockqty)) {//Rule 2 - When dates being updated & inventory is not available within this period

                  campaign.save();
                  IndoorCampaignDetail.destroy({ id: currentIndoorCampaignDetail.id }).exec(function (err) {
                    if (err) console.log(err); else if (currentIndoorCampaignDetail.id) {
                      var searchCriteria = {
                        agencyId: req.session.loggedUser.parentId,
                        "data.campaignId": campaign.id,
                        taskType: HelperService.getReviewKey(),
                        taskStatus: { '!': "Completed" }
                      };
                      searchCriteria["data.indoorCampaignDetailId"] = currentIndoorCampaignDetail.id;
                      AgencyTaskService.updateAgencyTask(req, searchCriteria, { isDeleted: true }, function (agencyTasksResult) {
                        console.log("All tasks deleted successfully for indoorCampaignDetailId - " + currentIndoorCampaignDetail.id);
                      });
                    }
                    StoreInventoryAvailable.destroy({ campaigndetailid: currentIndoorCampaignDetail.id }).exec(function (err) {
                      callbackArray();
                    });
                  });

                } else {//Rule 2 - When dates being updated & inventory is available within this period
                  var addedtotalinventory = campaign.totalinventory;
                  if (typeof (addedtotalinventory) === 'undefined' || addedtotalinventory == null || addedtotalinventory.length == 0) {
                    addedtotalinventory = 0;
                  }
                  addedtotalinventory = parseInt(addedtotalinventory);
                  addedtotalinventory = addedtotalinventory - 1;
                  campaign.totalinventory = addedtotalinventory;

                  var origCalculatedPrice = currentIndoorCampaignDetail.calculatedPrice;
                  origCalculatedPrice = parseFloat(origCalculatedPrice);
                  var totaldraftTotalPrice = campaign.draftTotalPrice;
                  if (typeof (totaldraftTotalPrice) === 'undefined' || totaldraftTotalPrice == null || totaldraftTotalPrice.length == 0) {
                    totaldraftTotalPrice = 0;
                  }
                  totaldraftTotalPrice = parseFloat(totaldraftTotalPrice);
                  totaldraftTotalPrice = (totaldraftTotalPrice - origCalculatedPrice);//.toFixed(2);
                  campaign.draftTotalPrice = totaldraftTotalPrice;

                  var totalGrossPrice = campaign.grossPrice;
                  if(typeof (totalGrossPrice) === 'undefined' || totalGrossPrice == null || totalGrossPrice.length == 0) {
                    totalGrossPrice = 0;
                  }

                  totalGrossPrice = parseFloat(totalGrossPrice);
                  totalGrossPrice = (totalGrossPrice - origCalculatedPrice);
                  camapign.grossPrice = totalGrossPrice
                  console.log("Here for GrossPrice  ==")

                  if (campaign.status == 'C') {
                    var tax = currentIndoorCampaignDetail.tax;

                    var finalPrice = campaign.finalPrice;
                    finalPrice = parseFloat(finalPrice);
                    var finaltax = campaign.finaltax;
                    finaltax = parseFloat(finaltax);

                    var finalpricewithtax = campaign.finalpricewithtax;
                    finalpricewithtax = parseFloat(finalpricewithtax);

                    origCalculatedPrice = parseFloat(origCalculatedPrice);
                    tax = parseFloat(tax);

                    finalPrice = finalPrice - origCalculatedPrice;
                    finaltax = finaltax - tax;

                    finalpricewithtax = finalpricewithtax - origCalculatedPrice - tax;

                    finaltax = parseFloat(finaltax);

                    campaign.finalPrice = finalPrice;//.toFixed(2);
                    campaign.finaltax = finaltax;//.toFixed(2);
                    campaign.finalpricewithtax = finalpricewithtax;//.toFixed(2);
                    //campaign.save();
                  }

                  campaign.save();
                  IndoorCampaignDetail.destroy({ id: currentIndoorCampaignDetail.id }).exec(function (err) {
                    if (err) console.log(err); else if (currentIndoorCampaignDetail.id) {
                      var searchCriteria = {
                        agencyId: req.session.loggedUser.parentId,
                        "data.campaignId": campaign.id,
                        taskType: HelperService.getReviewKey(),
                        taskStatus: { '!': "Completed" }
                      };
                      searchCriteria["data.indoorCampaignDetailId"] = currentIndoorCampaignDetail.id;
                      AgencyTaskService.updateAgencyTask(req, searchCriteria, { isDeleted: true }, function (agencyTasksResult) {
                        console.log("All tasks deleted successfully for indoorCampaignDetailId - " + currentIndoorCampaignDetail.id);
                      });
                    }
                    StoreInventoryAvailable.destroy({ campaigndetailid: currentIndoorCampaignDetail.id }).exec(function (err) {
                      callbackArray();
                    });
                  });
                }
              }, function (err) {

                if(campaign.price < campaign.finalPrice){
                  var RequestArray = [];
                  var promiseRequest = new Promise(function (resolve, reject) {
                    resolve (res.redirect('/campaign/discountOnCampaign?campaignId=' + campaign.id + "&amount=" + campaign.price))
                  });

                  RequestArray.push(promiseRequest);
                  Promise.all(RequestArray).then(function (result) {
                    return res.json({
                      success: true,
                      message: message,
                      list: newIndoorCampaignDetails,
                      failed_list: failed_list
                    });
                  }).catch(function (result) {//on reject
                    return res.json({
                      success: true,
                      message: message,
                      list: newIndoorCampaignDetails,
                      failed_list: failed_list
                    });
                  });
                } else {
                  return res.json({
                    success: true,
                    message: message,
                    list: newIndoorCampaignDetails,
                    failed_list: failed_list
                  });
                }
              });
            })

          });

        }
      });

    }
  } catch (error) {
    console.log(error);
    EmailService.sendErrorAlert(req, error, function (result) {
    });
    return res.json({
      success: false,
      message: "Something went wrong, please contact admin",
    });
  }
},