
var banners = [];

function fetchBanners() {
    
    banners = JSON.parse(localStorage.getItem('banners-data'));
    var bannersList = document.getElementById('banners-list');
    
    bannersList.innerHTML = '';

    if (banners){
        for (var i = 0; i < banners.length; i++) {
            var id1 = banners[i].element_id;
            var banner_img1 = banners[i].banner_img;
            var redirect_link1 = banners[i].redirect_link;

            bannersList.innerHTML += 
                '<a id="'+ id1 +'" href="'+ redirect_link1 + '">'+
                    '<img src=' + banner_img1 + ' alt="my picture" height="320px" width="320px"/>'+
                '</a><br><br>';
        }
    }
    else { banners = []; }
}

document.getElementById('bannerForm').addEventListener('submit', createNewBanner);
function createNewBanner(e){

    var bannerId = 'banners-list';
    var bannerImg = document.getElementById('imgUrl').value;
    var bannerLink = document.getElementById('linkUrl').value;

    var banner = {
        element_id: bannerId,
        banner_img: bannerImg,
        redirect_link: bannerLink,
    }
    banners.push(banner);
  
    document.getElementById('bannerForm').reset();
    e.preventDefault(); 
}

function saveBanners(){
    localStorage.setItem('banners-data', JSON.stringify(banners));
    fetchBanners();
}

function clearBanners(){
    localStorage.removeItem('banners-data');
    fetchBanners();
}