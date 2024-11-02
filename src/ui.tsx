import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/Card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/Select";
import { Input } from "@/components/Input";
import { Textarea } from "@/components/Textarea";
import { Button } from "@/components/Button";
import { Label } from "@/components/Label";
import "./index.css";

function App() {
  const [title, setTitle] = React.useState("");
  const [text, setText] = React.useState("");
  const [taskType, setTaskType] = React.useState("default");

  const onCreate = () => {
    parent.postMessage(
      {
        pluginMessage: {
          type: "create-task",
          title,
          text,
          taskType,
        }
      },
      "*"
    );
  };

  const onCancel = () => {
    parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
  };

  return (
    <main>
      <Card className="w-full h-full flex flex-col">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Create New Task</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <form className="space-y-4">
            <div className="space-y-2">
              <Label className="text-lg">Title</Label>
              <Input
                id="title"
                placeholder="Enter task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label className="text-lg">Description</Label>
              <Textarea
                id="description"
                placeholder="Enter task description"
                className="min-h-[100px] resize-none"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label className="text-lg">Task Type</Label>
              <Select value={taskType} onValueChange={setTaskType}>
                <SelectTrigger id="taskType">
                  <SelectValue placeholder="Select task type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="interactivity">Interactivity</SelectItem>
                  <SelectItem value="accessibility">Accessibility</SelectItem>
                  <SelectItem value="caution">Caution</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-end space-x-4">
          <Button variant="outline" onClick={onCancel}>Cancel</Button>
          <Button onClick={onCreate}>Create</Button>
        </CardFooter>
      </Card>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("react-page")).render(<App />)