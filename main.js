document.addEventListener('alpine:init', () => {
    console.log("Alpine.js initialized!");

    Alpine.data('randomNameGenerator', () => ({
        names: ["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank", "Grace", "Hank", "Ivy", "Jack"],
        selectedName: "Click the button to see a name",
        pickRandomName() {
            console.log("pickRandomName() called!"); 
            let randomIndex = Math.floor(Math.random() * this.names.length);
            this.selectedName = this.names[randomIndex];
        }
    }));
});
