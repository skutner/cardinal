import { Component, h, Listen, State, Prop } from "@stencil/core";
import { EventOptions } from "../../decorators/declarations/declarations";

@Component({
    tag: "psk-event-descriptor"
})
export class PskEventDescriptor {

    @Prop() title: string = "";

    @State() decoratorEvents: Array<EventOptions> = [];

    @Listen('psk-send-events', { target: "document" })
    receivedEventsDescription(evt: CustomEvent) {
        const payload = evt.detail;
        evt.stopImmediatePropagation();
        if (payload && payload.length > 0) {
            this.decoratorEvents = JSON.parse(JSON.stringify(payload));
        }
    }

    render() {
        let componentEventsDefinitions = this.decoratorEvents.map((event: EventOptions) => {
            const cardSubtitle = `${event.eventName}: CustomEvent`;
            return (
                <psk-hoc title={event.eventName}>
                    <p class="subtitle"><i>{cardSubtitle}</i></p>
                    <p>{event.description}</p>
                    {event.specialNote ? (<p><b>Note: {event.specialNote}</b></p>) : null}
                </psk-hoc>
            );
        });

        return (
            <psk-chapter title={this.title} id={this.title.replace(/( |:|\/)/g, "-").toLowerCase()}>
                {componentEventsDefinitions}
            </psk-chapter>
        );
    }
}