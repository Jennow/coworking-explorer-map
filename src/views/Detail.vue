<template>
  <div class='detail'>

    <div class="teaser" style="position: relative">
      <div class="coverphoto"
      :style="
      {
        'background-image': 'url(' + space.coverphoto +  ')',
        'max-height': '300px',
        'height': '50vh',
        'width': '100%',
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'margin-bottom': '75px',

      }">

      </div>
      <div class="logo"
      :style="
      {
        'background-image': 'url(' + space.logo +  ')',
        'height': '150px',
        'width': '150px',
        'background-size': 'contain',
        'background-repeat': 'no-repeat',
        'position': 'absolute',
        'bottom': '-75px',
        'margin': 'auto',
        'left': 0,
        'right': 0,
        'border-radius': '50%',
        'border': '8px solid #fff',
      }"
      >
      </div>
    </div>
    <div class="space-info">
      <h1>{{ space.name }}</h1>
      <p>{{ space.description }}</p>
      <p class="address">{{ space.map.address }}</p>
    </div>

    <a :href="space.website" class="button cta">Visit website</a>

</div>
</template>

<style lang="postcss" scoped>
  .teaser {
    margin-bottom: 100px;
  }

  .space-info {
    text-align: left;
  }

  h1 {
    font-size: 3rem;
    text-transform: uppercase;
  }

  p, a {
    font-size: 1.2rem;
  }
</style>

<script>
export default {
  data() {
    return {
      space: {
        country: 'United Kingdom',
        city: 'London',
        map: {
          address: '98 Victoria Road, London NW10 6NB, United Kingdom',
          lat: '51.5255905',
          lng: '-0.2549043999999867',
        },
        description: 'Space description: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        email: 'space@email.com',
        website: 'www.spacesite.com',
        logo: './img/test_logo.png',
        coverphoto: './img/test_teaser.jpeg',
        name: 'Coworking Space Space Name',
        slug: 'space-slug',
      },
      markers: [
        {
          city: 'London',
          map: {
            address: '43c Old London Road, Kingston upon Thames, United Kingdom',
            lat: '51.41088689999999',
            lng: '-0.29889170000001286',
          },
          name: 'Kingston CoWork',
          slug: 'kingston-cowork',
        },
        {
          city: 'London',
          map: {
            address: '98 Victoria Road, London NW10 6NB, United Kingdom',
            lat: '51.5255905',
            lng: '-0.2549043999999867',
          },
          name: 'Cowork Hub',
          slug: 'cowork-hub',
        },
        {
          city: 'Guildford',
          map: {
            address: '20 Nugent Road, Surrey Research Park, Guildford, Surrey, GU2 7AF',
            lat: '51.24096669999999',
            lng: '-0.6153684999999314',
          },
          name: 'Rocketdesk',
          slug: 'rocketdesk',
        },
      ],
    };
  },
};
</script>
