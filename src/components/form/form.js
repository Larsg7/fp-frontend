export default {
  name: 'form',
  data() {
    return {
      graduations: [
        'Bachelor',
        'Master',
        'Lehramt',
      ],
      institutes: [
        {
          id: 324235,
          name: 'IAP',
          places: 20,
          free: 10,
          waiting: 0,
        },
        {
          id: 3252,
          name: 'PI',
          places: 10,
          free: 10,
          waiting: 0,
        },
        {
          id: 324658658235,
          name: 'IKF',
          places: 20,
          free: 10,
          waiting: 0,
        },
      ],
      selected: {
        graduation: null,
        partner: {
          name: null,
          account: null,
        },
        institutes: [],
      },
    };
  },
  updated() {
    console.log(this.selected);
  },
};
