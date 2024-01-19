import { Selector } from "testcafe";
fixture('Login MAWM')
.page('https://fsgis.sce.manh.com/udc/dm/facility-console');

const num =47;
test("LPN Level Asn Creation ", async (t) => {

  try{
  //Item creation
   const itemId = await createItem(t);
   console.log("ItemId "+itemId);  

   //PurchaseOrder creation
   const poResponse = await createPurchageOrder(t, itemId );
   const po =poResponse[0];
   const pol =poResponse[1];
   console.log("PurchaseOrderId "+po);
   console.log("PurchaseOrderLineId "+pol);  

    //Asn creation
    // const asnResponse =  await lpnLevelASNCreation(t, "AutoTestItem70", "AutoTestPO70", "PL870");
    const asnResponse =  await lpnLevelASNCreation(t, itemId, po, pol);
    const asn =asnResponse[0];
    const lpn =asnResponse[1];
    console.log("ASN "+asn);
    console.log("LPN "+lpn);

  }catch(error){}
  
  });


   async function createItem(t){
    console.log("------------ Creating Item ------------");
    console.log("                                        ");
    const response = await t.request({
        url: "https://fsgis.sce.manh.com/item-master/api/item-master/item",
        method: "post",
        headers: {
          selectedLocation: '6230D',
          selectedOrganization:'6230D',
          Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyT3JncyI6WyI2MjMwRCJdLCJ1c2VyX25hbWUiOiJwb3J0bGFuZGRldi1hZG1pbnVzZXIiLCJ1c2VyTG9jYXRpb25zIjpbeyJsb2NhdGlvbklkIjoiNjIzMEQiLCJsb2NhdGlvblR5cGUiOiJkdW1teSJ9XSwibG9jYWxlIjoiZW4iLCJleGNsdWRlZFVzZXJCdXNpbmVzc1VuaXRzIjpbXSwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIiwiUk9MRV9hZG1pbkA2MjMwRCJdLCJjbGllbnRfaWQiOiJvbW5pY29tcG9uZW50LjEuMC4wIiwidXNlclRpbWVab25lIjpudWxsLCJlZGdlIjowLCJzY29wZSI6WyJvbW5pIiwiY29tcG9uZW50Il0sIm9yZ2FuaXphdGlvbiI6IjYyMzBEIiwiYWNjZXNzdG9BbGxCVXMiOmZhbHNlLCJ0ZW5hbnRJZCI6ImZzZ2lzc2YxMW8iLCJleHAiOjE3MDU2OTg0NDYsInVzZXJEZWZhdWx0cyI6W10sImp0aSI6IjdkYmUzZjE0LWJhZDQtNDZlNC04NmU5LTAyYjA5Y2YyZDRmNSIsInVzZXJCdXNpbmVzc1VuaXRzIjpbXX0.Gwg-pVIhKBgUQLiFey7UBHpWCeguE08UhjYnJ0rRdeqOASpQIpPoGM0R0b_lrHXOtaxM_uPPRu1QR_1k8iIqO_nIklxtNu9uBrOlgjQdZfxEIiWf3VPixxLqu5bAlZ4HQTOP5yowTliaTHIV8A1SfPWwRnqNFqnNfWUvwT_pREoamGDDh2Iujk_mHFjGrid2-bgQm-xlSGcVtCjMfEtxNcIAfFnx4Fzh1Km-P6-pBUTe8ApT6KKb-vsPn-FAJKN3F2nkkB0fZ06Q0E7567Rk5czxh1J0wqhlCcWf8t-KCWFrwzKxwb5KR7C7dNCpor36jTYWZ32Aa1jDF7GHfC9c4w`,
        },
        body: { 
          "ItemId": "AutoTestItem"+num,
          "ShortDescription": "AutoTestItem"+num,
          "PrimaryBarCode": "AutoTestItem"+num,
          "Description": "AutoTestItem"+num+"description",         
          "ProdLine": "BTY"
           
          } ,
      });
       await t.expect(response.status).eql(200);
      //  console.log(response);  
    return response.body.data.ItemId;
    }

    async function createPurchageOrder(t,itemId){
      console.log("                                        ");
      console.log("------- Creating PurchageOrder --------");
      console.log("--------  ItemId: "+itemId+" ----------");
      console.log("                                        ");

      const response = await t.request({
          url: "https://fsgis.sce.manh.com/receiving/api/receiving/purchaseOrder",
          method: "post",
          headers: {
            selectedLocation: '6230D',
            selectedOrganization:'6230D',
            Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyT3JncyI6WyI2MjMwRCJdLCJ1c2VyX25hbWUiOiJwb3J0bGFuZGRldi1hZG1pbnVzZXIiLCJ1c2VyTG9jYXRpb25zIjpbeyJsb2NhdGlvbklkIjoiNjIzMEQiLCJsb2NhdGlvblR5cGUiOiJkdW1teSJ9XSwibG9jYWxlIjoiZW4iLCJleGNsdWRlZFVzZXJCdXNpbmVzc1VuaXRzIjpbXSwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIiwiUk9MRV9hZG1pbkA2MjMwRCJdLCJjbGllbnRfaWQiOiJvbW5pY29tcG9uZW50LjEuMC4wIiwidXNlclRpbWVab25lIjpudWxsLCJlZGdlIjowLCJzY29wZSI6WyJvbW5pIiwiY29tcG9uZW50Il0sIm9yZ2FuaXphdGlvbiI6IjYyMzBEIiwiYWNjZXNzdG9BbGxCVXMiOmZhbHNlLCJ0ZW5hbnRJZCI6ImZzZ2lzc2YxMW8iLCJleHAiOjE3MDU2OTg0NDYsInVzZXJEZWZhdWx0cyI6W10sImp0aSI6IjdkYmUzZjE0LWJhZDQtNDZlNC04NmU5LTAyYjA5Y2YyZDRmNSIsInVzZXJCdXNpbmVzc1VuaXRzIjpbXX0.Gwg-pVIhKBgUQLiFey7UBHpWCeguE08UhjYnJ0rRdeqOASpQIpPoGM0R0b_lrHXOtaxM_uPPRu1QR_1k8iIqO_nIklxtNu9uBrOlgjQdZfxEIiWf3VPixxLqu5bAlZ4HQTOP5yowTliaTHIV8A1SfPWwRnqNFqnNfWUvwT_pREoamGDDh2Iujk_mHFjGrid2-bgQm-xlSGcVtCjMfEtxNcIAfFnx4Fzh1Km-P6-pBUTe8ApT6KKb-vsPn-FAJKN3F2nkkB0fZ06Q0E7567Rk5czxh1J0wqhlCcWf8t-KCWFrwzKxwb5KR7C7dNCpor36jTYWZ32Aa1jDF7GHfC9c4w`,
          },
          body: { 
            "Actions": {},
            "DestinationFacilityAliasId": "6230D",
            "DestinationFacilityId": "6230D",
            "EntityLabels": { },
            "Extended": {
               "VendorId" : "Macy's",
               "BusinessUnit" : "TURF",
               "BuyIntend" : "HAF"
            },
            "FacilityId": "6230D",
            "LocalizedTo": "6230D",
            "Messages": {},
            "OrgId": "6230D",
            "OriginFacilityAliasId": "6230D",
            "OriginFacilityId": "6230D",
            "PK": "null",
            "PurchaseOrderId": "AutoTestPO"+num,// unique
            "PurchaseOrderLine": [
            {
            "Actions": {
            "property1": "null",
            "property2": "null"
            },
            "Canceled": false,
            "Closed": false,
            "CountryOfOrigin": "US",
            "CreatedBy": "macysdev-adminuser",
            "EntityLabels": { },
            "Extended": { },
            "FacilityId": "6230D",
            "InventoryTypeId": "null",
            "ItemId": itemId,
            "LocalizedTo": "null",
            "Messages": {
            "Message": [
            ],
            "Size": 0
            },
            "OrderQuantity": 10,
            "OrgId": "627277",
            "PK": "null",
            "ProductStatusId": "null",
            "PurchaseOrder": {
            "PurchaseOrderId": "AutoTestPO"+num,// unique
            },
            "PurchaseOrderId": "AutoTestPO"+num, // unique
            "PurchaseOrderLineId": "PL8"+num, // unique
            "QuantityUomId": "Unit",
            "ShippedQuantity": 0
            }
            ],
            "PurchaseOrderStatus": "0000"
             
            } ,
        });
         await t.expect(response.status).eql(200);
         //console.log(response);  
      return [response.body.data.PurchaseOrderId,"PL8"+num];
      }

      async function lpnLevelASNCreation(t, itemId, poId, polId){
        console.log("                                        ");
        console.log("---- Creating lpnLevelASNCreation -----");
        console.log("--------  ItemId: "+itemId+" ----------");
        console.log("--------  poId: "+poId+" --------------");
        console.log("--------  polId: "+polId+" ------------");
        console.log("                                        ");
        const response = await t.request({
            url: "https://fsgis.sce.manh.com/receiving/api/receiving/asn/save",
            method: "post",
            headers: {
              selectedLocation: '6230D',
              selectedOrganization:'6230D',
              Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyT3JncyI6WyI2MjMwRCJdLCJ1c2VyX25hbWUiOiJwb3J0bGFuZGRldi1hZG1pbnVzZXIiLCJ1c2VyTG9jYXRpb25zIjpbeyJsb2NhdGlvbklkIjoiNjIzMEQiLCJsb2NhdGlvblR5cGUiOiJkdW1teSJ9XSwibG9jYWxlIjoiZW4iLCJleGNsdWRlZFVzZXJCdXNpbmVzc1VuaXRzIjpbXSwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIiwiUk9MRV9hZG1pbkA2MjMwRCJdLCJjbGllbnRfaWQiOiJvbW5pY29tcG9uZW50LjEuMC4wIiwidXNlclRpbWVab25lIjpudWxsLCJlZGdlIjowLCJzY29wZSI6WyJvbW5pIiwiY29tcG9uZW50Il0sIm9yZ2FuaXphdGlvbiI6IjYyMzBEIiwiYWNjZXNzdG9BbGxCVXMiOmZhbHNlLCJ0ZW5hbnRJZCI6ImZzZ2lzc2YxMW8iLCJleHAiOjE3MDU2OTg0NDYsInVzZXJEZWZhdWx0cyI6W10sImp0aSI6IjdkYmUzZjE0LWJhZDQtNDZlNC04NmU5LTAyYjA5Y2YyZDRmNSIsInVzZXJCdXNpbmVzc1VuaXRzIjpbXX0.Gwg-pVIhKBgUQLiFey7UBHpWCeguE08UhjYnJ0rRdeqOASpQIpPoGM0R0b_lrHXOtaxM_uPPRu1QR_1k8iIqO_nIklxtNu9uBrOlgjQdZfxEIiWf3VPixxLqu5bAlZ4HQTOP5yowTliaTHIV8A1SfPWwRnqNFqnNfWUvwT_pREoamGDDh2Iujk_mHFjGrid2-bgQm-xlSGcVtCjMfEtxNcIAfFnx4Fzh1Km-P6-pBUTe8ApT6KKb-vsPn-FAJKN3F2nkkB0fZ06Q0E7567Rk5czxh1J0wqhlCcWf8t-KCWFrwzKxwb5KR7C7dNCpor36jTYWZ32Aa1jDF7GHfC9c4w`,
            },
            body: { 
              "AsnId": "AutoASN"+num,
              "AsnOriginTypeId": "P",
              "AsnLevelId": "LPN",
              "VendorId": "800",
              "DestinationFacilityId": "6230D",
              "Lpn": [
                   {
                      "AllocationTypeId": null,
                      "LpnId": "9800001000887aAuto"+num,
                      "LpnTypeId": "ILPN",
                      "LpnDetail": [
                          {
                              "PurchaseOrderId": poId,
                              "PurchaseOrderLineId": polId,
                              "QuantityUomId": "UNIT",
                              "ItemId": itemId,
                              "ShippedQuantity": 10
                          }
                      ]
                  }  
              ]
              } ,
          });
           await t.expect(response.status).eql(200);
          return [response.body.data.AsnId, "9800001000887aAuto"+num];
        }
    