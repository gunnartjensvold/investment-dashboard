import { test } from "vitest";
import { data } from "./dummyresponse";
import { buildFinanceData } from "./utils";

test("Process finance data for use in app", () => {
  buildFinanceData(data);
});
