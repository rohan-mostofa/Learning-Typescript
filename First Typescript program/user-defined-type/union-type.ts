let userId : string | number | boolean;

userId = '1245875';
userId = 1245875;
userId = true;

const displayUserInfo = (userId : string | number) => {
    console.log(userId);
}

displayUserInfo('124587');
displayUserInfo(124587);
