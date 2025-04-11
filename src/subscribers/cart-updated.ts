import {SubscriberArgs, SubscriberConfig} from "@medusajs/framework";
import {CartWorkflowEvents} from "@medusajs/utils";

export default async function handler({ event }: SubscriberArgs<{ id: string }>) {
  console.log(`Received notification for ${config.event}: ${JSON.stringify(event)}`);
}

export const config: SubscriberConfig = {
  event: CartWorkflowEvents.UPDATED
};
