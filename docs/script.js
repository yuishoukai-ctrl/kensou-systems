(() => {
  const form = document.querySelector('#consult-form');
  const summary = document.querySelector('#consult-summary');
  const status = document.querySelector('#form-status');

  if (!form || !summary || !status) return;

  const valueOf = (name) => {
    const field = form.elements.namedItem(name);
    return field && 'value' in field ? field.value.trim() : '';
  };

  const makeSummary = () => {
    const equipment = [...form.querySelectorAll('input[name="equipment"]:checked')]
      .map((input) => input.value);
    return [
      '【研装システムズ 設備相談メモ】',
      `相談設備：${equipment.length ? equipment.join('、') : '未選択'}`,
      `会社・屋号：${valueOf('company') || '未記入'}`,
      `お名前：${valueOf('name') || '未記入'}`,
      `対象ワーク：${valueOf('work') || '未記入'}`,
      `設置予定地域：${valueOf('area') || '未記入'}`,
      '',
      '相談内容：',
      valueOf('message') || '未記入',
      '',
      '※このメモはWebページから自動送信されていません。'
    ].join('\n');
  };

  const updateSummary = () => {
    summary.value = makeSummary();
  };

  form.addEventListener('input', updateSummary);
  form.addEventListener('change', updateSummary);

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    updateSummary();
    try {
      await navigator.clipboard.writeText(summary.value);
      status.textContent = '相談メモをコピーしました。連絡先公開後、メール等に貼り付けてご利用ください。';
    } catch {
      summary.focus();
      summary.select();
      status.textContent = '自動コピーできませんでした。相談メモを選択したので、手動でコピーしてください。';
    }
  });

  form.addEventListener('reset', () => {
    window.setTimeout(() => {
      updateSummary();
      status.textContent = '入力内容をクリアしました。';
    }, 0);
  });

  document.querySelectorAll('[data-equipment]').forEach((link) => {
    link.addEventListener('click', () => {
      const wanted = link.dataset.equipment;
      const checkbox = [...form.querySelectorAll('input[name="equipment"]')]
        .find((input) => input.value === wanted);
      if (checkbox) checkbox.checked = true;
      updateSummary();
    });
  });

  const equipmentKey = new URLSearchParams(window.location.search).get('equipment');
  const equipmentMap = {
    wetblast: '大型ウェットブラスト',
    sandblast: 'サンドブラストマシン',
    powder: '粉体塗装機',
    oven: '粉体塗装用乾燥炉',
  };
  const equipmentName = equipmentMap[equipmentKey];
  if (equipmentName) {
    const checkbox = [...form.querySelectorAll('input[name="equipment"]')]
      .find((input) => input.value === equipmentName);
    if (checkbox) checkbox.checked = true;
  }

  updateSummary();
})();
