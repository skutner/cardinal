import { Component, Element, h, State, Prop } from "@stencil/core";
import Prism from 'prismjs';

@Component({
    tag: "psk-code",
    styleUrl: './highlight.css'
})

export class PskCode {

    @Prop() title: string = "";
    @Prop() language: string = '';

    @State() componentCode: string = "";
    @Element() host: HTMLDivElement;

    componentWillLoad() {
        this.componentCode = this.host.innerHTML;
        this.host.innerHTML = '';
    }

    componentDidLoad() {
        Prism.highlightAllUnder(this.host);
    }

    render() {

        const sourceCode = (
            <pre>
                <code class={`language-${this.language}`}>
                    {this.componentCode}
                </code>
            </pre>
        );

        if (this.title.replace(/\s/g, '') === '') {
            return <psk-card>{sourceCode}</psk-card>;
        }

        return <psk-chapter>{sourceCode}</psk-chapter>;
    }
}