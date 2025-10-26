import ProgressBar from '../ProgressBar';

export default function ProgressBarExample() {
  return (
    <div className="space-y-6 p-6 max-w-2xl">
      <ProgressBar
        label="ISA Contributions (2024/25)"
        current={12400}
        target={20000}
      />
      <ProgressBar
        label="Emergency Fund"
        current={18000}
        target={24000}
      />
      <ProgressBar
        label="House Deposit"
        current={28000}
        target={50000}
      />
    </div>
  );
}
