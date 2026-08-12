import { defineTool } from "@lovable.dev/mcp-js";
import { company } from "@/data/company";

export default defineTool({
  name: "get_company_info",
  title: "Get company info",
  description:
    "Get HeilAres OÜ public company details: name, tagline, email and contact persons with their area of responsibility and phone number.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const info = {
      name: company.name,
      tagline: company.tagline,
      email: company.email,
      website: "https://heilares.ee",
      contacts: company.contacts.map((c) => ({
        name: c.name,
        area: c.area,
        phone: c.phone,
      })),
    };
    return {
      content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});
