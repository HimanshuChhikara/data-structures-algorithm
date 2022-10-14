db.getCollection("Therapeutic_Services_5k").aggregate(

    // Pipeline
    [
        // Stage 1
        {
            $match: {
                            "company" : {
                                "$ne" : "Tailored Healthcare Staffing"
                            }
                        }
        },

        // Stage 2
        {
            $group: {
                _id: {"title":"$jobtitle","location":"$location","company":"$company"},
                 first: { $first : "$$ROOT" }
                //<field1>: { <accumulator1> : <expression1> },
                //...
            }
        },

        // Stage 3
        {
            $replaceRoot: {
                newRoot: "$first"
            }
        },

        // Stage 4
        {
            $out: // Note: must be last stage of pipeline
            {
                 db: "P1P2P3",
                 coll: "Therapeutic_Services_5k_TLC_unique"
            }
        },
    ],

    // Options
    {

    }

    // Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/

);