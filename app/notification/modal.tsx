import { Button } from "@/components/ui/button";
import { AnimatedList } from "@/components/ui/animated-list";
import { Notification } from "@/app/notification/notification";

interface AlertModalProps {
  message: string;
  onClose: () => void;
}

export const AlertModal = ({ message, onClose }: AlertModalProps) => (
  <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
      <h2 className="text-xl font-bold mb-4">Peringatan</h2>
      <p>{message}</p>
      <Button onClick={onClose} className="mt-4 bg-red-500 text-white">
        Tutup
      </Button>
    </div>
  </div>
);

interface ResultsModalProps {
  name: string;
  notifications: Array<{
    name: string;
    description: string;
    icon: string;
    color: string;
    time?: string;
  }>;
  onClose: () => void;
}

export const ResultsModal = ({ 
  name, 
  notifications, 
  onClose 
}: ResultsModalProps) => (
  <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
      <h2 className="text-xl font-bold mb-4">
        Hasil Presensi untuk: {name}
      </h2>
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification key={idx} {...item} />
        ))}
      </AnimatedList>
      <Button onClick={onClose} className="mt-4 bg-red-500 text-white">
        Tutup
      </Button>
    </div>
  </div>
);