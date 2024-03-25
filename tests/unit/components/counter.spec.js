import { shallowMount, mount } from "@vue/test-utils";
import Counter from "@/components/Counter";

describe("Counter.vue", () => {
  /* test("debe de hacer match con el snapshot", () => {
    const wrapper = shallowMount(Counter);
    expect(wrapper.html()).toMatchSnapshot();
  }); */
  test("h2 debe de tener el valor por fecto 'Counter'", () => {
    const wrapper = shallowMount(Counter);
    expect(wrapper.find("h2").exists()).toBeTruthy();
    const h2 = wrapper.find("h2");
    expect(h2.text()).toBe("Counter");
  });
});
