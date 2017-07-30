import FormComponent from '../form/form.vue';

export default {
  name: 'app',
  data() {
    return {
      startRegistration: false,
    }
  },
  methods: {
    start() {
      this.startRegistration = !this.startRegistration;
    },
  },
  components: {
    'registration-form': FormComponent,
  },
};
