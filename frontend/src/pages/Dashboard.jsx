import { Package, TrendingUp, AlertTriangle, ArrowUpRight } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6 bg-slate-50 min-h-screen text-slate-800">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Panel de Control</h1>
          <p className="text-sm text-slate-500 mt-1">Visión general del estado de tu inventario en StockFlow.</p>
        </div>
      </header>

      {/* Tarjetas de Métricas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Productos</p>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">124</h3>
          </div>
          <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
            <Package size={24} />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Stock Bajo</p>
            <h3 className="text-2xl font-bold text-amber-600 mt-1">8</h3>
          </div>
          <div className="p-3 bg-amber-50 text-amber-600 rounded-lg">
            <AlertTriangle size={24} />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Ventas del Mes</p>
            <h3 className="text-2xl font-bold text-emerald-600 mt-1">1,450 €</h3>
          </div>
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg">
            <TrendingUp size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}