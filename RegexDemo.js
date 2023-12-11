const phoneNumberValidation=()=>
{
    let phoneNo=document.getElementById('phoneNumber').value
    let noValidate=document.getElementById('phoneNumber')
    let regex=/^[7-9][0-9]{9}$/
    if(regex.test(phoneNo))
    {
        console.log('Successfully validated')
    return true
    }
    else
    {
noValidate.style.border="red solid 4px"
return false
    }
}