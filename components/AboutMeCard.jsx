import { Card, CardContent } from "../app/components/ui/card";
import { Separator } from "../app/components/ui/separator";
import { LayoutGrid, Server, Database, Cloud } from "lucide-react";

export default function AboutMeCard() {
    return (
        <Card className="bg-zinc-100/70 dark:bg-zinc-900/70 backdrop-blur-sm rounded-xl h-full border-primary/10">
            <CardContent className="pt-6 px-5 flex flex-col justify-between h-full">
                <div className="space-y-4">
                    {/* Header */}
                    <div>
                        <h3 className="text-xl font-medium mb-2">
                            <span className="bg-primary/10 px-2 py-1 rounded-md">Swapnil Singh</span>
                            <span className="text-base text-zinc-600 dark:text-zinc-400 ml-2">Full Stack Developer</span>
                        </h3>
                        <p className="text-base text-zinc-700 dark:text-zinc-300">
                            Computer Engineering student and Full Stack Developer Intern at Stewart Title, building enterprise web apps and payment platforms.
                        </p>
                    </div>

                    <Separator className="bg-primary/10" />

                    {/* Tech stack in 2x2 grid */}
                    <div>
                        <p className="text-base font-medium mb-3">
                            My working zone:
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="flex items-center gap-2 bg-zinc-50/50 dark:bg-zinc-800/50 p-2 rounded-md">
                                <LayoutGrid className="w-5 h-5 text-primary" />
                                <div>
                                    <span className="font-medium">Angular</span>
                                    <span className="text-sm block text-zinc-500">for Web UIs</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 bg-zinc-50/50 dark:bg-zinc-800/50 p-2 rounded-md">
                                <Server className="w-5 h-5 text-primary" />
                                <div>
                                    <span className="font-medium">Node.js / C#</span>
                                    <span className="text-sm block text-zinc-500">for Backend</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 bg-zinc-50/50 dark:bg-zinc-800/50 p-2 rounded-md">
                                <Database className="w-5 h-5 text-primary" />
                                <div>
                                    <span className="font-medium">PostgreSQL / Redis</span>
                                    <span className="text-sm block text-zinc-500">for Data</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 bg-zinc-50/50 dark:bg-zinc-800/50 p-2 rounded-md">
                                <Cloud className="w-5 h-5 text-primary" />
                                <div>
                                    <span className="font-medium">Azure / Docker</span>
                                    <span className="text-sm block text-zinc-500">for Deployment</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <Separator className="bg-primary/10 mb-4" />
                    <p className="text-base">
                        Refactoring legacy code and shipping reusable UI, one enterprise workflow at a time.
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}
