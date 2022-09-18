import { notEmptyLine } from './utils/index.js';

export class ReactiveHtml {
    constructor() {
        this.render();
    }

    testFunction(event: Event): void {
        console.log('get event:', event);
    }

    private render(): unknown {
        const template = `
            <div @click="testFunction"> <div class="test-div">test div element</div>
                <input/>
            </div>
    `;
        this.handlingTemplate(template);
        console.log('template: ', template);
        return template;
    }

    handlingTemplate(template: string): void {
        template
            .split('\n')
            .filter(notEmptyLine)
            .forEach(line => {
                line.split('<').filter(notEmptyLine).forEach(e => console.log(e));
            });
    }
}

const el = new ReactiveHtml();
console.log('el: ', el);
