// Inside your enemy update loop
enemies.forEach(enemy => {
  enemy.y += enemy.speedY;

  // Homing behavior: move horizontally toward player's current X position
  let dx = player.x - enemy.x;
  if (Math.abs(dx) > 5) {
    enemy.x += Math.sign(dx) * (enemy.homingSpeed || 1.8);
  }
});
const BOSS_MAX_HP = 150; // Increased health pool

function updateBoss() {
  if (!boss.active) return;

  // Faster movement
  boss.x += boss.dx * 3.5;
  if (boss.x <= 50 || boss.x >= canvas.width - 50) {
    boss.dx *= -1;
  }

  // Boss Spread Attack Pattern (3 Bullets)
  if (boss.fireCooldown <= 0) {
    bossBullets.push(
      { x: boss.x - 20, y: boss.y + 30, vx: -2, vy: 6 },
      { x: boss.x,      y: boss.y + 30, vx: 0,  vy: 6 },
      { x: boss.x + 20, y: boss.y + 30, vx: 2,  vy: 6 }
    );
    boss.fireCooldown = 40; // High firing rate
  } else {
    boss.fireCooldown--;
  }
}
