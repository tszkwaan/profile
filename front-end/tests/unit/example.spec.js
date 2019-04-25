import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import DialogProject from "@/components/project/DialogProject.vue";

describe("DialogProject.vue", () => {
  it("dialog is showed when showDialog is triggered", () => {
    const wrapper = shallowMount(DialogProject);
    expect(wrapper.vm.dialog).toBe(false);
    const button = wrapper.find("button");
    button.trigger("click");
    expect(wrapper.vm.count).toBe(1);
  });
});
