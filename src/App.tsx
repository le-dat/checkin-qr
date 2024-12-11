import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const NotFound = React.lazy(() => import("./pages/NotFound"));
const UserDetailPage = React.lazy(() => import("./pages/UserDetail"));
const Loading = React.lazy(() => import("./pages/Loading"));
const Home = React.lazy(() => import("./pages/Home"));

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
              <Route path="/user/:userId" element={<UserDetailPage />} />
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.div>
        </Suspense>
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default App;
