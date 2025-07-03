import { Card, CardContent } from "@/components/ui/card";
export default function HobbyCard({
  hobby,
}: {
  hobby: { name: string; description: string; icon: React.ElementType };
}) {
  return (
    <Card className="text-center p-4 hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/10">
      <CardContent className="p-6 text-center">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <hobby.icon className="w-6 h-6 text-primary" />
        </div>
        <h4 className="font-semibold mb-2">{hobby.name}</h4>
        <p className="text-sm text-muted-foreground">{hobby.description}</p>
      </CardContent>
    </Card>
  );
}
