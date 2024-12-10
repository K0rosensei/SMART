"use client";

import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import BlurIn from "@/components/ui/blur-in";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlertModal, ResultsModal } from "../notification/modal";
import { usePresensiSearch } from "../notification/search";

export default function PresensiSearchComponent() {
  const {
    inputNama,
    setInputNama,
    filteredNotifications,
    showPopup,
    alertMessage,
    setAlertMessage,
    handleSearch,
    resetSearch,
  } = usePresensiSearch();

  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />

      <div
        className="flex flex-col items-center gap-4 mb-8"
        style={{ marginTop: "-10rem" }}
      >
        <BlurIn
          word="S M A R T"
          className="text-4xl font-bold text-black dark:text-white"
        />

        <div className="flex w-full max-w-sm items-center space-x-2 z-10 relative">
          <Input
            type="text"
            placeholder="Cari Nama Siswa"
            value={inputNama}
            onChange={(e) => setInputNama(e.target.value)}
          />
          <Button type="button" onClick={handleSearch}>
            Cari
          </Button>
        </div>
      </div>

      {alertMessage && (
        <AlertModal
          message={alertMessage}
          onClose={() => setAlertMessage(null)}
        />
      )}

      {showPopup && (
        <ResultsModal
          name={inputNama}
          notifications={filteredNotifications}
          onClose={resetSearch}
        />
      )}
    </div>
  );
}
