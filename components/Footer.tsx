export default function Footer() {
  return (
    <footer className="text-center py-10 border-t border-gray-800">
      <p className="text-gray-500">
        © {new Date().getFullYear()} Quatred. All rights reserved.
      </p>
    </footer>
  );
}
