export function overrideConsoleLog(): void {
    const logContainer = document.createElement("pre");
    logContainer.id = "console-log";
    document.body.appendChild(logContainer);

    const originalLog = console.log;
    console.log = (...args: unknown[]): void => {
        // Convert arguments to strings
        const message = args
            .map(arg => (typeof arg === "object" ? JSON.stringify(arg, null, 2) : String(arg)))
            .join(" ");

        // Append message to HTML
        logContainer.textContent += message + "\n";

        // Also log to the real console (optional)
        originalLog.apply(console, args);
    };
}