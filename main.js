document.addEventListener('DOMContentLoaded', () => {
    Alpine.data('randomNameGenerator', () => ({
        selectedName: "Click the button to see a name",
        pickRandomName() {
            this.selectedName = "Name selected!";
        }
    }));
});