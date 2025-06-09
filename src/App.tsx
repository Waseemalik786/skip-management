import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skips = [
  {
    id: 1,
    size: 4,
    label: "4 Yard Skip",
    hirePeriod: "7 day hire period",
    price: 227,
    img: "/assets/skip-4.png",
  },
  {
    id: 2,
    size: 6,
    label: "6 Yard Skip",
    hirePeriod: "14 day hire period",
    price: 300,
    img: "/assets/skip-6.png",
  },
  {
    id: 3,
    size: 8,
    label: "8 Yard Skip",
    hirePeriod: "7 day hire period",
    price: 325,
    img: "/assets/skip-8.png",
  },
  {
    id: 4,
    size: 10,
    label: "10 Yard Skip",
    hirePeriod: "7 day hire period",
    price: 380,
    img: "/assets/skip-10.png",
  },
  {
    id: 5,
    size: 12,
    label: "12 Yard Skip",
    hirePeriod: "14 day hire period",
    price: 425,
    img: "/assets/skip-12.png",
  },
  {
    id: 6,
    size: 14,
    label: "14 Yard Skip",
    hirePeriod: "14 day hire period",
    price: 475,
    img: "/assets/skip-14.png",
  },
];

const SkipSelector = () => {
  const [selected, setSelected] = useState<number | null>(0);
  const selectedSkip = skips.find((skip) => skip.id === selected);

  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-200 min-h-screen flex flex-col items-center py-10 px-4">
      {/* Progress Steps */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap justify-center gap-5 w-full max-w-5xl mb-12"
      >
        {[
          { label: "Postcode", icon: "📍", done: true },
          { label: "Waste Type", icon: "🗑️", done: true },
          { label: "Select Skip", icon: "🚚", done: false, active: true },
          { label: "Permit Check", icon: "📝", done: false },
          { label: "Choose Date", icon: "📅", done: false },
          { label: "Payment", icon: "💳", done: false },
        ].map((step, i) => (
          <motion.div
            key={step.label}
            className="flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <motion.div
              className={`w-10 h-10 rounded-full flex items-center justify-center shadow-sm
                ${
                  step.active
                    ? "bg-sky-100 border-2 border-sky-500 text-sky-600"
                    : step.done
                    ? "bg-green-100 border-2 border-green-500 text-green-600"
                    : "bg-white border-2 border-slate-200 text-slate-400"
                }`}
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-lg">{step.icon}</span>
            </motion.div>
            <span
              className={`text-sm font-medium tracking-wide 
                ${
                  step.active
                    ? "text-sky-700"
                    : step.done
                    ? "text-green-700"
                    : "text-slate-400"
                }`}
            >
              {step.label}
            </span>
            {i < 5 && (
              <motion.div
                className={`w-8 h-1 rounded-full ${
                  i <= 1
                    ? "bg-green-400"
                    : i === 2
                    ? "bg-sky-400"
                    : "bg-slate-300"
                }`}
                initial={{ width: 0 }}
                animate={{ width: "2rem" }}
                transition={{ delay: 0.3 }}
              />
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Title */}
      <motion.div
        className="text-center mb-12 max-w-2xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-2">
          <motion.span
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block"
          >
            🚛
          </motion.span>{" "}
          Choose Your Skip Size
        </h1>
        <motion.p
          className="text-slate-600 mt-3 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Select the skip size that suits your waste disposal needs
        </motion.p>
      </motion.div>

      {/* Skip Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mb-24">
        {skips.map((skip, index) => (
          <motion.div
            key={skip.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{
              y: -5,
              boxShadow: "0 15px 30px -10px rgba(0, 128, 200, 0.1)",
            }}
            onClick={() => setSelected(skip.id)}
            className={`cursor-pointer rounded-xl bg-white shadow-md transition-all duration-300 overflow-hidden 
              ${
                selected === skip.id
                  ? "border-2 border-sky-500 ring-4 ring-sky-200"
                  : "border border-slate-100"
              }`}
          >
            {/* Skip header badge */}
            <div
              className={`relative py-2 px-4 text-center ${
                selected === skip.id ? "bg-sky-500" : "bg-slate-100"
              }`}
            >
              <span
                className={`text-sm font-bold uppercase tracking-wider ${
                  selected === skip.id ? "text-white" : "text-slate-700"
                }`}
              >
                {skip.size} Yard Skip
              </span>
            </div>

            <div className="p-5">
              {/* Skip image with background */}
              <div className="flex justify-center items-center h-40 mb-4 relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-sky-50 to-slate-100 rounded-lg opacity-80"
                  animate={{ scale: selected === skip.id ? 1.05 : 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.img
                  src="https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/5-yarder-skip.jpg"
                  alt={skip.label}
                  className="h-32 object-contain relative z-10 rounded-xl"
                  animate={{ scale: selected === skip.id ? 1.1 : 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-slate-800">
                  {skip.label}
                </h3>
                <p className="text-sm text-slate-500 mt-1">{skip.hirePeriod}</p>
                <motion.div
                  className={`mt-3 text-3xl font-bold ${
                    selected === skip.id ? "text-sky-600" : "text-slate-700"
                  }`}
                  animate={{ scale: selected === skip.id ? 1.1 : 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  £{skip.price}
                </motion.div>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                tabIndex={-1}
                className={`mt-5 w-full py-2.5 rounded-lg text-base font-semibold transition-colors
                  ${
                    selected === skip.id
                      ? "bg-sky-600 text-white shadow-lg shadow-sky-200"
                      : "bg-slate-100 hover:bg-sky-50 text-slate-700"
                  }`}
              >
                {selected === skip.id ? (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center justify-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Selected
                  </motion.span>
                ) : (
                  "Select This Skip"
                )}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Selected Skip Bottom Bar */}
      <AnimatePresence>
        {selectedSkip && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-lg shadow-slate-200/50 z-50 backdrop-blur-sm bg-white/80"
          >
            <div className="max-w-5xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-5">
                <motion.div className="relative" whileHover={{ scale: 1.05 }}>
                  <div className="absolute inset-0 bg-sky-100 rounded-lg transform -rotate-3"></div>
                  <img
                    src="https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/5-yarder-skip.jpg"
                    alt={selectedSkip.label}
                    className="w-16 h-14 object-contain rounded bg-white p-1 relative z-10"
                  />
                </motion.div>
                <div>
                  <div className="font-bold text-slate-800 text-lg">
                    {selectedSkip.label}
                  </div>
                  <motion.div
                    className="text-base text-sky-600 font-bold flex items-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: 0, duration: 0.5, delay: 0.2 }}
                  >
                    <span className="mr-1 text-slate-500">Total:</span> £
                    {selectedSkip.price}
                  </motion.div>
                  <div className="text-sm text-slate-500">
                    {selectedSkip.hirePeriod}
                  </div>
                </div>
              </div>
              <div className="flex gap-3 w-full sm:w-auto justify-end">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelected(null)}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-5 py-2.5 rounded-lg font-medium border border-slate-200"
                >
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Back
                  </span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white px-6 py-2.5 rounded-lg font-semibold shadow-lg shadow-blue-200"
                >
                  <span className="flex items-center">
                    Continue
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SkipSelector;
