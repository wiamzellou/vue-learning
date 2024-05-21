import AssignementList from "./AssignementList.js";
import AssignementCreate from "./AssignementCreate.js";
export default {
    components: { AssignementList, AssignementCreate},
    template:`
        <section class="flex gap-8">
            <assignement-list :assignements="filters.inProgress" title="In Progress">
                <assignement-create @add="add"></assignement-create> <!--@add means when the event add is dispatched call the method add-->
            </assignement-list>
<!--        <section v-show="inProgressAssignments.length" class="mt-8">-->
<!--                <h2 class="font-bold mb-2">In Progress</h2>-->
<!--                <ul>-->
<!--                    <li -->
<!--                        v-for="assignement in inProgressAssignments" -->
<!--                        :key="assignement.id"-->
<!--                    >-->
<!--                        <label>-->
<!--                            {{ assignement.name }}-->
<!--                            <input type="checkbox" v-model="assignement.complete">-->
<!--                        </label>-->
<!--                        -->
<!--                    </li> -->
<!--                </ul>-->
<!--                <pre>-->
<!--                    {{ assignements }}-->
<!--                </pre>-->
<!--        </section> -->
                       <assignement-list :assignements="filters.completed" title="Completed" can-toggle></assignement-list>                       
        
        </section>
    `,
    data(){
        return{
            assignements:[
            ],

        }
    },
    computed: {
        filters(){
            return{
                inProgress: this.assignements.filter(assignement => ! assignement.complete),
                completed: this.assignements.filter(assignement => assignement.complete),
            }
        }
    },

    created() {
        fetch('http://localhost:3001/assignements')
            .then(response => response.json())
            .then(assignements => {
               this.assignements = assignements;
            });
    },

    methods: {
        add(name) {
            this.assignements.push({
                name: name,
                completes: false,
                id: this.assignements.length + 1
            });
        }
    }
}