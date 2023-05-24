

$(document).ready(function () {


  $('.pdp_hero-button').on('click', () => {
    if ($('.pdp_gallery-modal').hasClass('hidden')) {
      if (!($('.pdp_body').hasClass('overflow_none'))) $('.pdp_body').addClass('overflow_none');
      $('.pdp_gallery-modal').removeClass('hidden')
    }
  })

  $('.gallery_close-img').on('click', () => {
    if (!($('.pdp_gallery-modal').hasClass('hidden'))) $('.pdp_gallery-modal').addClass('hidden');
    $('.pdp_body').removeClass('overflow_none');
  })

  $('.pdp_gallery-close_button').on('click', () => {
    if (!($('.pdp_gallery-modal').hasClass('hidden'))) $('.pdp_gallery-modal').addClass('hidden');
    $('.pdp_body').removeClass('overflow_none');
  })


  function convertScore(x10) {
    let x5 = ((x10 - 1) * (6 / 4) + 1) / 3;
    return x5.toFixed(2);
  }

  let guesty = $('.guesty-id').text();

  const options = {
    method: "GET",
    url: `https://host-made-server.herokuapp.com/urbanstay/availability/${guesty}`,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };


  axios
    .request(options)
    .then(function (response) {

      let data = response.data.response;

      let reviewAverage = data.reviews.avg;
      if (reviewAverage) {
        let parsedAverage = convertScore(reviewAverage)
        $('.home-hero_review-amount').text(parsedAverage)
      } else {
        $('.pdp_review-block').addClass('hidden')
      }


      let img1 = data.pictures[0].original;
      let img2 = data.pictures[1].original;
      let img3 = data.pictures[3].original;

      if (!($('#pdp-img-1').attr('src'))) {
        $('#pdp-img-1').attr('srcset', img1);
        $('#pdp-img-1').removeClass('w-dyn-bind-empty')
      }
      if (!($('#pdp-img-2').attr('src'))) {
        $('#pdp-img-2').attr('srcset', img2);
        $('#pdp-img-2').removeClass('w-dyn-bind-empty')
      }
      if (!($('#pdp-img-3').attr('src'))) {
        $('#pdp-img-3').attr('srcset', img3);
        $('#pdp-img-3').removeClass('w-dyn-bind-empty')
      }

      let initialGalleryImg = $('.pdp_gallery-img');
      let singleBlock = $('.gallery_single-block');
      let doubleBlock = $('.gallery_double-block');

      let blockAmount = data.pictures.length / 3
      for (let i = 0; i < blockAmount; i++) {
        singleBlock.clone().appendTo('.pdp_gallery-scroll_block')
        doubleBlock.clone().appendTo('.pdp_gallery-scroll_block')
      }

      data.pictures.forEach((element, index) => {
        $('.pdp_gallery-img').eq(index).attr('srcset', element.original)
        $('.pdp_gallery-img').eq(index).attr('src', element.original)
      });
      if (data.pictures.length !== $('.pdp_gallery-img').length) {

        $('.pdp_gallery-img').each(function (i, el) {
          if (i > data.pictures.length - 1) {
            $(el).remove()
          } else {

          }
        });
      }



      /* ----- Amenities List ----- */

      const amenities = {
        "air conditioning": "fas fa-snowflake",
        "bbq grill": "fas fa-fire",
        "cable tv": "fas fa-tv",
        "dishwasher": "fas fa-circle",
        "washer": "fas fa-circle",
        "dryer": "fas fa-tshirt",
        "elevator": "fas fa-caret-square-up",
        "free parking on premises": "fas fa-parking",
        "heating": "fas fa-temperature-low",
        "indoor fireplace": "fas fa-fire-alt",
        "iron": "fas fa-iron",
        "refrigerator": "fas fa-snowflake",
        "stove": "fas fa-burn",
        "tv": "fas fa-tv",
        "washer": "fas fa-tshirt",
        "accessible-height bed": "fas fa-bed",
        "accessible-height toilet": "fas fa-toilet",
        "baby bath": "fas fa-bath",
        "baby monitor": "fas fa-baby",
        "babysitter recommendations": "fas fa-baby-carriage",
        "bathtub": "fas fa-bath",
        "beach": "fas fa-umbrella-beach",
        "beach essentials": "fas fa-sun",
        "beach front": "fas fa-umbrella-beach",
        "beach view": "fas fa-umbrella-beach",
        "bed linens": "fas fa-bed",
        "breakfast": "fas fa-coffee",
        "bicycles available": "fas fa-bicycle",
        "carbon monoxide detector": "fas fa-exclamation-triangle",
        "changing table": "fas fa-baby",
        "children’s books and toys": "fas fa-child",
        "children’s dinnerware": "fas fa-utensils",
        "cleaning before checkout": "fas fa-broom",
        "cleaning disinfection": "fas fa-virus",
        "coffee maker": "fas fa-coffee",
        "cookware": "fas fa-pot",
        "crib": "fas fa-baby",
        "desk": "fas fa-desktop",
        "dishes and silverware": "fas fa-utensils",
        "doorman": "fas fa-hotel",
        "downtown": "fas fa-city",
        "dryer in common space": "fas fa-tshirt",
        "dvd player": "fas fa-dvd",
        "emergency exit": "fas fa-exclamation-triangle",
        "enhanced cleaning practices": "fas fa-shield-virus",
        "ev charger": "fas fa-car-battery",
        "essentials": "fas fa-asterisk",
        "extra pillows and blankets": "fas fa-bed",
        "family/kid friendly": "fas fa-users",
        "fire extinguisher": "fas fa-fire-extinguisher",
        "fireplace guards": "fas fa-fire",
        "first aid kit": "fas fa-medkit",
        "free parking on street": "fas fa-parking",
        "game console": "fas fa-gamepad",
        "garden or backyard": "fas fa-tree",
        "golf course front": "fas fa-golf-ball",
        "golf view": "fas fa-golf-ball",
        "gym": "fas fa-dumbbell",
        "grab-rails for shower and toilet": "fas fa-wheelchair",
        "hangers": "fas fa-tshirt",
        "hair dryer": "fas fa-cut",
        "high chair": "fas fa-chair",
        "high touch surfaces disinfected": "fas fa-virus",
        "hot tub": "fas fa-hot-tub",
        "hot water": "fas fa-water",
        "indoor pool": "fas fa-swimming-pool",
        "internet": "fas fa-wifi",
        "kettle": "fas fa-coffee",
        "kitchen": "fas fa-utensils",
        "lake": "fas fa-water",
        "lake access": "fas fa-water",
        "lake front": "fas fa-water",
        "laptop friendly workspace": "fas fa-laptop",
        "long term stays allowed": "fas fa-calendar-alt",
        "luggage dropoff allowed": "fas fa-suitcase",
        "microwave": "fas fa-microwave",
        "mountain": "fas fa-mountain",
        "mountain view": "fas fa-mountain",
        "near ocean": "fas fa-water",
        "oven": "fas fa-oven",
        "ocean front": "fas fa-water",
        "outdoor pool": "fas fa-swimming-pool",
        "outlet covers": "fas fa-plug",
        "pack ’n play/travel crib": "fas fa-baby",
        "paid parking off premises": "fas fa-parking",
        "patio or balcony": "fas fa-door-open",
        "pets allowed": "fas fa-paw",
        "pocket wifi": "fas fa-wifi",
        "private entrance": "fas fa-door-closed",
        "private pool": "fas fa-swimming-pool",
        "resort": "fas fa-hotel",
        "river": "fas fa-water",
        "roll-in shower with shower bench or chair": "fas fa-wheelchair",
        "room-darkening shades": "fas fa-blinds",
        "rural": "fas fa-tree",
        "shampoo": "fas fa-bath",
        "single level home": "fas fa-home",
        "smoke detector": "fas fa-smoke",
        "stair gates": "fas fa-gate",
        "stereo system": "fas fa-music",
        "safe": "fas fa-lock",
        "sea view": "fas fa-water",
        "ski in": "fas fa-skiing",
        "ski in/ski out": "fas fa-skiing",
        "ski out": "fas fa-skiing",
        "toaster": "fas fa-toaster",
        "towels provided": "fas fa-bath",
        "town": "fas fa-city",
        "communal pool": "fas fa-swimming-pool",
        "swimming pool": "fas fa-swimming-pool",
        "table corner guards": "fas fa-table",
        "tub with shower bench": "fas fa-bath",
        "village": "fas fa-city",
        "washer in common space": "fas fa-tshirt",
        "water view": "fas fa-water",
        "waterfront": "fas fa-water",
        "wheelchair accessible": "fas fa-wheelchair",
        "wide clearance to bed": "fas fa-bed",
        "wide clearance to shower and toilet": "fas fa-bath",
        "wide hallway clearance": "fas fa-door-closed",
        "window guards": "fas fa-window-maximize",
        "wireless internet": "fas fa-wifi",
        // Add more amenities and corresponding icons as needed
      };

      const priorityAmenityNames = [
        "bbq grill",
        "cable tv",
        "dishwasher",
        "free parking on premises",
        "indoor fireplace",
        "tv",
        "washer",
        "beach",
        "beach essentials",
        "beach front",
        "beach view",
        "bicycles available",
        "coffee maker",
        "cookware",
        "essentials",
        "gym",
        "hair dryer",
        "hot tub",
        "indoor pool",
        "lake front",
        "luggage dropoff allowed",
        "outdoor pool",
        "pack ’n play/travel crib",
        "patio or balcony",
        "private pool",
        "river",
        "shampoo",
        "towels provided",
        "communal pool",
        "swimming pool",
        "water view",
        "waterfront",
        "wireless internet"
      ];

      let amenityItem = $('.amenities-modal_cms-item');
      let priorityAmenities = [];
      let otherAmenities = [];
      
      data.amenities.forEach((element, index) => {
        // Convert the amenity name to lowercase to match the keys in the 'amenities' object
        let amenityName = element.toLowerCase();
      
        // Get the icon class name from the 'amenities' object
        let iconClass = amenities[amenityName];
      
        if (priorityAmenityNames.includes(amenityName)) {
          priorityAmenities.push({ name: element, iconClass: iconClass });
        } else {
          otherAmenities.push({ name: element, iconClass: iconClass });
        }
      });
      
      // Merge the arrays so that priority amenities come first
      let allAmenities = [...priorityAmenities, ...otherAmenities];
      
      allAmenities.forEach((element, index) => {
        if (index < allAmenities.length - 1) {
          amenityItem.clone().appendTo('.amenities-modal_cms-list');
        }
      
        // Set the text of the amenity item
        $('.amenities-modal_cms-item').eq(index).text(element.name);
      
        // Append the icon to the amenity item
        $('.amenities-modal_cms-item').eq(index).append(`<i class="${element.iconClass}"></i>`);
      
        if (index <= 9 || $('.amenities-alt_card').eq(index)) {
          $('.amenities-alt_card').eq(index).find('.amenitiy-alt_icon').append(`<i class="${element.iconClass}"></i>`)
          $('.amenitiy-alt_name').eq(index).text(element.name)
          console.log(element.name)
          console.log(element.iconClass)
        }
      });
      

      const swiper_type2 = new Swiper('.swiper.type-2', {

        loop: true,
        slidesPerView: 1,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        navigation: {
          nextEl: '.button-next.type-2',
          prevEl: '.button-prev.type-2',
        },

      });


      //end of then
    })
    .catch(function (error) {
      console.error(error);
    });


});
