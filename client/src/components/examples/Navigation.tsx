import Navigation from "../Navigation";

export default function NavigationExample() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-32 px-4">
        <p className="text-muted-foreground">Scroll to see the navigation bar stick to the top</p>
      </div>
    </div>
  );
}
