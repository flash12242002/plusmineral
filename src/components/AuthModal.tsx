import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signInAnonymously 
} from '../lib/firebase';
import { auth } from '../lib/firebase';
import { playCrystalChime } from '../utils/audio';
import { Mail, Lock, Sparkles, X, UserCheck } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  message?: string;
}

export default function AuthModal({ isOpen, onClose, message }: AuthModalProps) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    playCrystalChime();

    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      onClose();
    } catch (err: any) {
      console.error(err);
      if (err.code === 'auth/email-already-in-use') {
        setError('此電子信箱已被註冊');
      } else if (err.code === 'auth/wrong-password' || err.code === 'auth/user-not-found' || err.code === 'auth/invalid-credential') {
        setError('電子信箱或密碼錯誤');
      } else if (err.code === 'auth/weak-password') {
        setError('密碼強度不足，至少需要 6 個字元');
      } else if (err.code === 'auth/invalid-email') {
        setError('無效的電子信箱格式');
      } else if (err.code === 'auth/admin-restricted-operation' || err.code === 'auth/operation-not-allowed') {
        setError('電子信箱登入服務尚未啟用。請至 Firebase Console 專案的「Authentication」->「Sign-in method」設定頁面，啟用「電子信箱/密碼 (Email/Password)」登入方式即可正常使用！');
      } else {
        setError('認證失敗，請稍後再試：' + (err.message || '未知錯誤'));
      }
    } finally {
      setLoading(false);
    }
  };

  const handleAnonymousLogin = async () => {
    setError(null);
    setLoading(true);
    playCrystalChime();
    try {
      await signInAnonymously(auth);
      onClose();
    } catch (err: any) {
      console.error(err);
      if (err.code === 'auth/admin-restricted-operation' || err.code === 'auth/operation-not-allowed') {
        setError('訪客體驗登入失敗。此專案尚未啟用匿名登入服務，請至 Firebase Console 的「Authentication」->「Sign-in method」頁面啟用「匿名 (Anonymous)」登入方式，或使用上方電子信箱進行註冊/登入！');
      } else {
        setError('匿名登入失敗：' + (err.message || '請稍後再試'));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: 'spring', duration: 0.5 }}
        className="relative bg-white border border-[#ECE6DD] w-full max-w-md rounded-2xl p-8 shadow-xl overflow-hidden z-10"
      >
        {/* Soft elegant decorative gradient accent */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#8E735B] via-[#7E8B83] to-[#917E8B]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="mx-auto w-12 h-12 bg-[#FAF6EE] rounded-full flex items-center justify-center mb-3">
            <Sparkles className="text-[#8E735B]" size={22} />
          </div>
          <h3 className="text-xl font-serif font-semibold text-slate-800">
            {isSignUp ? '建立靈魂帳號' : '登入晶石旅程'}
          </h3>
          <p className="text-xs text-slate-500 mt-1 leading-relaxed">
            {message || '登入以收藏您喜愛的水晶，隨時查看能量印記'}
          </p>
        </div>

        {/* Error message */}
        {error && (
          <div className="mb-4 p-3 bg-rose-50 border border-rose-100 text-rose-600 rounded-xl text-xs text-center leading-relaxed font-sans">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleAuth} className="space-y-4">
          <div>
            <label className="block text-[11px] font-mono tracking-wider uppercase text-slate-400 mb-1.5">
              電子信箱 (Email)
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input
                type="email"
                required
                placeholder="your@soul.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:outline-none focus:border-[#8E735B] focus:bg-white transition-all font-sans"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-mono tracking-wider uppercase text-slate-400 mb-1.5">
              安全密碼 (Password)
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input
                type="password"
                required
                placeholder="••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:outline-none focus:border-[#8E735B] focus:bg-white transition-all font-sans"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 rounded-xl text-xs font-serif tracking-widest text-white bg-[#8E735B] hover:bg-[#7D644E] disabled:opacity-50 transition-all duration-300 shadow-sm mt-2 cursor-pointer flex items-center justify-center gap-1"
          >
            {loading ? '請稍候...' : isSignUp ? '註冊帳號' : '立即登入'}
          </button>
        </form>

        {/* Guest sign in section */}
        <div className="relative my-6 text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-stone-100"></div>
          </div>
          <span className="relative px-3 bg-white text-[10px] uppercase tracking-wider font-mono text-slate-400">
            或
          </span>
        </div>

        <button
          onClick={handleAnonymousLogin}
          disabled={loading}
          className="w-full py-2.5 rounded-xl text-xs font-serif tracking-widest text-slate-700 bg-slate-50 border border-slate-100 hover:bg-slate-100 disabled:opacity-50 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
        >
          <UserCheck size={14} className="opacity-75" />
          {loading ? '登入中...' : '一鍵訪客體驗'}
        </button>

        {/* Footer Toggle */}
        <div className="mt-6 text-center text-xs text-slate-500">
          {isSignUp ? '已經有帳號了嗎？' : '還沒有建立過帳號嗎？'}{' '}
          <button
            onClick={() => {
              setIsSignUp(!isSignUp);
              setError(null);
              playCrystalChime();
            }}
            className="text-[#8E735B] hover:underline hover:text-[#7D644E] font-medium transition-colors"
          >
            {isSignUp ? '立即登入' : '免費註冊'}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
