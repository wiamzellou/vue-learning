import Assignement from "./Assignement.js";
import AssignementTags from "./AssignementTags.js";
import Panel from "./Panel.js";
export default {
    components:{ Assignement, AssignementTags, Panel },
    template: `
        <Panel v-show="show && assignements.length" class="w-80">
            <div class="flex justify-between items-start">
                <h2 class="font-bold mb-2">{{ title }}
                    <span>({{ assignements.length }})</span>
                </h2>
                <button v-show="canToggle" @click="show = false">&times;</button>
            </div>
            <assignement-tags 
                v-model:currentTag="currentTag"
                :tags="assignements.map(a=>a.tag)"
                
            /> <!--equivalent de @change="UpdateCurrentTag" --> 
            <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
                <assignement
                    v-for="assignement in filteredAssignements"
                    :key="assignement.id"
                    :assignement="assignement"
                ></assignement>
            </ul>
            <slot></slot>
            <template v-slot:footer>
                my footer goes here
            </template>
        </Panel> 
    `,
    props: {
        assignements: Array,
        title: String,
        canToggle: {type: Boolean, default: false }
    },

    data(){
        return {
            currentTag: 'all',
            show: true
        }
    },

    computed: {
        filteredAssignements() {
            if(this.currentTag === 'all'){
                return this.assignements;
            }
            return this.assignements.filter(a => a.tag === this.currentTag);
        },
    }
}
