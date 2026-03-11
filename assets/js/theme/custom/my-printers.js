import PageManager from "../page-manager";export default class MyPrinters extends PageManager{constructor(context){super(context);this.getCustomerPrinterIds()}
getCustomerPrinterIds(){const customerId=this.context.customer.id;fetch(`https://api.ijtdirect.co.uk/customerprinters.php?customer_id=${customerId}`).then(res=>res.json()).then(data=>{if(data.data){let categoryIds=[];data.data.forEach(category=>{categoryIds.push(category.printer_cat_id)});categoryIds.forEach(catId=>{this.context.cartridges.children.forEach(cartridgeType=>{cartridgeType.children.forEach(brand=>{brand.children.forEach(series=>{series.children?.forEach(model=>{if(model.id==catId){if(model.image){let imageSource=model.image.data.replace('{:size}','100x100');$('#my-printers-table').append(`<div class='my-printers__table-row' id='${model.id}'>
 <div class='my-printers__image-container'>
 <a href='${model.url}'><img src=${imageSource} alt='${model.image.alt}'/></a>
 </div>
 <div class='my-printers__printer-name'>
 <a href='${model.url}'>${model.name}</a>
 </div>
 <div class='my-printers__actions'>
 <a href='${model.url}' class='button button--primary'>View Printer Page</a>
 </div>
 </div>`)}else{$('#my-printers-table').append(`<div class='my-printers__table-row' id='${model.id}'>
 <div class='my-printers__image-container'>
 <div></div>
 </div>
 <div class='my-printers__printer-name'>
 <a href='${model.url}'>${model.name}</a>
 </div>
 <div class='my-printers__actions'>
 <a href='${model.url}' class='button button--primary'>View Printer Page</a>
 </div>
 </div>`)}}})})})})})}else{$('#my-printers-table').append(`<div class='my-printers__no-printers-message'>${data.message}</div>`)}})}}
