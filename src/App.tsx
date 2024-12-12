import { AnimatePresence, motion } from "framer-motion";
import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const NotFound = React.lazy(() => import("./pages/NotFound"));
const TicketCard = React.lazy(() => import("./pages/TicketCard"));
const Loading = React.lazy(() => import("./pages/Loading"));
const EventDetail = React.lazy(() => import("./pages/EventDetail"));
const Events = React.lazy(() => import("./pages/Events"));

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <Suspense fallback={<Loading />}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Routes>
              <Route path="/ticket/:id" element={<TicketCard />} />
              <Route path="/event/:id" element={<EventDetail />} />
              <Route path="/" element={<Events />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.div>
        </Suspense>
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default App;
