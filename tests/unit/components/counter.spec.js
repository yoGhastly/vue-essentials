import { shallowMount } from "@vue/test-utils";
import Counter from "@/components/Counter";

describe("Counter.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Counter);
  });
  /* test("debe de hacer match con el snapshot", () => {
    const wrapper = shallowMount(Counter);
    expect(wrapper.html()).toMatchSnapshot();
  }); */
  test("h2 debe de tener el valor por fecto 'Counter'", () => {
    expect(wrapper.find("h2").exists()).toBeTruthy();
    const h2 = wrapper.find("h2");
    expect(h2.text()).toBe("Counter");
  });

  test("el valor por defecto debe de ser 100 en el p", () => {
    const p = wrapper.find(`[data-test-id="counter"]`).text();
    expect(p).toBe("100");
  });

  test("debe de incrementar y decrementar el contador", async () => {
    const [increaseBtn, decreaseBtn] = wrapper.findAll("button");
    await increaseBtn.trigger("click");
    let p = wrapper.find(`[data-test-id="counter"]`).text();
    expect(p).toBe("101");

    await decreaseBtn.trigger("click"),
      await decreaseBtn.trigger("click"),
      (p = wrapper.find(`[data-test-id="counter"]`).text());
    expect(p).toBe("99");
  });

  test("debe de establecer el valor por defecto", () => {
    const { start } = wrapper.props();
    const p = wrapper.find(`[data-test-id="counter"]`).text();
    expect(parseInt(p)).toBe(start);
  });

  test("debe de mostrar la prop title", () => {
    const title = "Hello World";
    const wrapper = shallowMount(Counter, {
      props: {
        title,
      },
    });
    expect(wrapper.find("h2").text()).toBe(title);
  });
});
