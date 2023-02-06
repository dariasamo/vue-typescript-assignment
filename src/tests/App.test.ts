import { render } from "@testing-library/vue";
import App from "@/App.vue";
import { API_ENDPOINT } from "@/constants";

test("calls the api when mounted", async () => {
  const spy = vi.spyOn(window, "fetch");
  render(App);
  expect(spy).toHaveBeenCalled();
  expect(spy).toBeCalledWith(API_ENDPOINT);
});
