import DriveIcon from "@/assets/icons/DriveIcon";
import Container from "./container";
import GridBackground from "./grid-background";
import Heading from "./heading";
import IconBox from "./icon-box";
import SubHeading from "./sub-heading";
import OneDriveIcon from "@/assets/icons/OneDriveIcon";
import SalesForceIcon from "@/assets/icons/SalesForceIcon";
import HubspotIcon from "@/assets/icons/HubspotIcon";
import NotionIcon from "@/assets/icons/NotionIcon";
import AirtableIcon from "@/assets/icons/AirtableIcon";
import SlackIcon from "@/assets/icons/SlackIcon";
export default function Integration() {
  return (
    <div className="relative border-b">
      <div className="border-y">
        <div className="h-20 md:h-30 border-x max-w-7xl mx-auto" />
      </div>

      <Container className="py-8 border-x flex flex-col gap-4 overflow-hidden">
        <Heading variant="mid" className="md:text-center">
          Integrations and automations
        </Heading>
        <SubHeading className="md:m-auto text-md md:text-md lg:text-md max-w-2xl">
          Live-sync, set up action based triggers (e.g., receive an email), and
          automate actions (e.g., send a slack message) across your tool stack
        </SubHeading>

        <div className="flex flex-wrap gap-6 md:hidden w-full mt-10">
          <IconBox
            icon={DriveIcon}
            title="Drive"
            variant="ghost"
            iconClassName="size-10"
          />
          <IconBox
            icon={OneDriveIcon}
            title="OneDrive"
            variant="ghost"
            iconClassName="size-10"
          />
          <IconBox
            icon={SalesForceIcon}
            title="SalesForce"
            variant="ghost"
            iconClassName="size-10"
          />
          <IconBox
            icon={HubspotIcon}
            title="Hubspot"
            variant="ghost"
            iconClassName="size-10"
          />
          <IconBox
            icon={NotionIcon}
            title="Notion"
            variant="ghost"
            iconClassName="size-10"
          />
          <IconBox
            icon={AirtableIcon}
            title="Airtable"
            variant="ghost"
            iconClassName="size-10"
          />
          <IconBox
            icon={SlackIcon}
            title="Slack"
            variant="ghost"
            iconClassName="size-10"
          />
        </div>

        <div className="hidden md:block relative w-160 h-96 mask-radial-from-0% mx-auto mt-25">
          <IconBox
            icon={DriveIcon}
            variant="ghost"
            className="translate-x-43 translate-y-20"
            iconClassName="size-10"
            title="Drive"
          />
          <IconBox
            icon={OneDriveIcon}
            variant="ghost"
            className="translate-x-82"
            iconClassName="size-10"
            title="OneDrive"
          />
          <IconBox
            icon={SalesForceIcon}
            variant="ghost"
            className="translate-x-20"
            iconClassName="size-10"
            title="SalesForce"
          />
          <IconBox
            icon={HubspotIcon}
            variant="ghost"
            className="translate-x-62 -translate-y-19.5"
            iconClassName="size-10"
            title="Hubspot"
          />
          <IconBox
            icon={NotionIcon}
            variant="ghost"
            className="translate-x-103 -translate-y-39"
            iconClassName="size-10"
            title="Notion"
          />
          <IconBox
            icon={AirtableIcon}
            variant="ghost"
            className="translate-x-42 -translate-y-38"
            iconClassName="size-10"
            title="Airtable"
          />
          <IconBox
            icon={SlackIcon}
            variant="ghost"
            className="translate-x-83 -translate-y-58"
            iconClassName="size-10"
            title="Slack"
          />
          <GridBackground />
        </div>
      </Container>
    </div>
  );
}
