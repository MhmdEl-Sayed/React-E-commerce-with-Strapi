const path = require('path');

module.exports = () => {
  const client = 'postgres'; // نوع قاعدة البيانات

  const connections = {
    postgres: {
      connection: {
        host: 'aws-0-eu-central-1.pooler.supabase.com', // مضيف قاعدة البيانات
        port: 6543, // المنفذ
        database: 'postgres', // اسم قاعدة البيانات
        user: 'postgres.btamcrmnptbvonuwbumy', // اسم المستخدم
        password: 'JFkJzWT2P1sq7CLn', // كلمة المرور
        ssl: { rejectUnauthorized: false }, // إعدادات SSL
      },
      schema: 'public', // المخطط الافتراضي
      pool: { min: 2, max: 10 }, // إعدادات الاتصال
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: 60000, // مهلة الاتصال
    },
  };
};