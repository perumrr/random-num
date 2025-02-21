function getRandomName() {
    const names = [
        "Alice", "Bob", "Charlie", "Diana", "Eve",
        "Frank", "Grace", "Hank", "Ivy", "Jack"
    ];
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}