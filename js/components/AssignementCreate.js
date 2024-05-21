export default {
    template:`
        <form @submit.prevent="add">
            <div class="border border-gray-600 text-black flex">
                <input v-model="newAssignement" placeholder="New assignement..." class="p-2" />
                <button type="submit" class="bg-white p-2 border-l">Add</button>
            </div>
        </form>
    `,

    data(){
        return{
            newAssignement: ''
        }
    },
    methods:{
        add() {
            this.$emit('add', this.newAssignement) //dispatch an event called add in parent components with data this.newAssignement
            // this.assignements.push({
            //     name: this.newAssignement,
            //     completes: false,
            //     id: this.assignements.length + 1
            // });

            this.newAssignement= '';
        }
    }
}