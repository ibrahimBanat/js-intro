// var name = prompt('Please Enter Your Name.');
// alert(`Hello ${name}`);
// var age = prompt('Please Enter Your Age.'); 

// if(age> 13){
//     alert('you are allowed to enter the website');
// } else {
//     alert('You are not allowed to enter the website');
// };


function album() {
    var nameOfAlbum = prompt('do you want to purchase Damnation or Deliverance?');

    while (nameOfAlbum != 'Damnation' && nameOfAlbum !='Deliverance'){
        var nameOfAlbum = prompt('do you want to purchase Damnation or Deliverance?');
        
    };

    var damnation = '<img src="https://upload.wikimedia.org/wikipedia/en/1/16/Damnation_cover.jpg"/>';

    var deliverance = '<img src="https://upload.wikimedia.org/wikipedia/en/b/b3/Opeth_-_Deliverance.jpg"/>';

    var numberOfAlbums = prompt('How Many Albums do you want to purchase?');

    iterator = 1;

    if(nameOfAlbum == 'Damnation') {
        for(iterator; iterator <= numberOfAlbums; iterator++){
            render = '';
            render = render + damnation;
            document.write(render + iterator);
        };
    } else { 
        for(iterator; iterator <= numberOfAlbums; iterator++){
            render = '';
            render += deliverance;
            document.write(render + iterator);
        };
    }
}

function VerifyingWillPurchase(){ 
    console.log('whatever');
    var purchaseState = confirm(`Press OK if you want to purchase the album or cancel.`);
    if (purchaseState){
        willPurchase();
    } else { 
        willNotPurchase();
    };
        
};

function willPurchase(){ 
    album();
    alert('Thank you!');
};

function willNotPurchase(){ 
    alert('I can\'t stop you');
};