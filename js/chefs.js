$(document).ready(function () {
    $('.demo').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});

//Ajax
$.ajax({
    url: "https://reqres.in/api/users",
    type: "GET",
    success: function (response) {
        var chefMembers = response.data;
        var chefsElement = $('#ourChefs');
        for (let index = 0; index < 6; index++) {
            const chefMember = chefMembers[index];

            var chefElement = `<div class="chefs">
                                    <img src="${chefMember.avatar}"avatar alt="">
                                    <h2>${chefMember.first_name + ' ' + chefMember.last_name}</h2>
                                    <p>${chefMember.email}</p>
                                    <div class="chefButtons">
                                    <a href="#" target="_blank">
                                        <i class="fab fa-facebook-square" title="Facebook"></i>
                                    </a>
                                    <a href="#" target="_blank">
                                        <i class="fab fa-twitter" title="Twitter"></i>
                                    </a>
                                    <a href="#" target="_blank">
                                        <i class="fab fa-instagram" title="Instagram"></i>
                                    </a>
                                    <a href="#" target="_blank">
                                        <i class="fab fa-youtube" title="Youtube"></i>
                                    </a>
                                    </div>
                                </div>`;

            chefsElement.append(chefElement);
        }

    }
});