const getCurrentMMDD = () => {
  const now = new Date();
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  return `${mm}${dd}`;
};

export const MolefrogLogo = () => (
  <div className="border-[1.5px] border-bank-vault-800 rounded-[7px] p-0.5 flex items-center justify-center min-h-8.5 font-ds-mono bg-bank-vault-100 shadow-ds-border-small group/molefrog-logo">
    <div className="flex items-center gap-1">
      <div className="text-sm/3.5 font-semibold bg-bank-vault-800 rounded-sm px-1 py-0.5 text-bank-vault-100 tracking-wide whitespace-pre group-hover/molefrog-logo:bg-ds-accent-700">
        <div className="hidden lg:block">
          <div>M0+LE</div>
          <div>FR_0G</div>
        </div>

        <div className="block lg:hidden">
          <div>M0LE</div>
          <div>FR0G</div>
          <div>{getCurrentMMDD()}</div>
        </div>
      </div>
    </div>
  </div>
);
