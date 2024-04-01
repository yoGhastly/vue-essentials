import { shallowMount } from "@vue/test-utils";
import Indecision from "@/components/indecision";

describe("Indecision vue", () => {
  let wrapper, clgSpy;
  beforeEach(() => {
    wrapper = shallowMount(Indecision);
    clgSpy = jest.spyOn(console, "log");
  });

  test("debe hacer match con el snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("escribir en el input no debe de disparar nada", async () => {
    const getAnswerSpy = jest.spyOn(wrapper.vm, "getAnswer");
    const input = wrapper.find("input");
    await input.setValue("Hola mundo");
    expect(clgSpy).toHaveBeenCalledTimes(1);
    expect(getAnswerSpy).not.toHaveBeenCalled();
  });

  test("escribir el simobolo de '?' debe disparar el fetch", () => { });

  test("pruebas en getAnswer", () => { });

  test("pruebas en getAnswer - fallo en API", () => { });
});
