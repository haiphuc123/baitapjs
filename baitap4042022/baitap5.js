var string = 'My Name'
if(string.length <3){
    console.log("Do dai cua chuoi tu 3 ky tu tro len");
}
else{

    var cutString = string.substring(string.length-3, string.length);

    var newString = cutString.repeat(4);
    console.log(newString);
}