 
function main() 
{
    console.log("Inside main() function");
    console.log("Issuing ajax request to the resource which will require cors");
    $.ajax
    ({
        dataType: "json",
        url: "http://google.com",
        xhrFields: {
       		withCredentials: true
    	},
        success: function(data) 
        {
            console.log("Response on success");
            console.log(data);
        }
    });
}
