import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import ResidentialCleaning from "@/pages/residential-cleaning";
import DeepCleaning from "@/pages/deep-cleaning";
import MoveInOut from "@/pages/move-in-out";
import CommercialCleaning from "@/pages/commercial-cleaning";
import AirbnbCleaning from "@/pages/airbnb-cleaning";
import PostConstruction from "@/pages/post-construction";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/residential-cleaning" component={ResidentialCleaning} />
      <Route path="/deep-cleaning" component={DeepCleaning} />
      <Route path="/move-in-out" component={MoveInOut} />
      <Route path="/commercial-cleaning" component={CommercialCleaning} />
      <Route path="/airbnb-cleaning" component={AirbnbCleaning} />
      <Route path="/post-construction" component={PostConstruction} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
