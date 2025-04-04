import React from 'react';

const HeadProfile = () => {
  return (
    <div style={{ backgroundColor: '#0a0a0a', color: 'white', fontFamily: 'Arial, sans-serif', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '16px', borderBottom: '1px solid #333' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ fontSize: '24px', marginRight: '8px', cursor: 'pointer' }}>&lt;</span>
          <h1 style={{ fontSize: '20px', margin: 0 }}>Profile</h1>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '12px' }}>
          <div style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.1)', 
            borderRadius: '20px', 
            padding: '8px 16px', 
            fontSize: '12px',
            border: '1px solid #72b626',
            display: 'flex',
            alignItems: 'center'
          }}>
            <span>Role change request is in-review</span>
            <span style={{ marginLeft: '5px', border: '1px solid #72b626', borderRadius: '50%', width: '16px', height: '16px', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', fontSize: '10px' }}>i</span>
          </div>
          <button style={{ 
            backgroundColor: 'transparent', 
            color: '#72b626', 
            border: '1px solid #72b626', 
            borderRadius: '20px', 
            padding: '8px 16px', 
            cursor: 'pointer' 
          }}>
            Change Cover
          </button>
          <button style={{ 
            backgroundColor: 'transparent', 
            color: 'white', 
            border: '1px solid #333', 
            borderRadius: '50%', 
            width: '36px', 
            height: '36px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            fontSize: '20px',
            cursor: 'pointer'
          }}>
            +
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ display: 'flex' }}>
        {/* Left Side - Profile Info */}
        <div style={{ flex: '1', padding: '0' }}>
          {/* Cover Image */}
          <div style={{ position: 'relative', height: '230px', overflow: 'hidden' }}>
            <img 
              src="/path-to-sunset-image.jpg" 
              alt="Cover" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Profile Details */}
          <div style={{ padding: '16px', position: 'relative' }}>
            {/* Profile Picture */}
            <div style={{ 
              position: 'absolute', 
              top: '-40px', 
              left: '16px', 
              width: '80px', 
              height: '80px', 
              borderRadius: '50%', 
              overflow: 'hidden',
              border: '3px solid #0a0a0a'
            }}>
              <img 
                src="/path-to-profile-pic.jpg" 
                alt="Profile" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ 
                position: 'absolute', 
                bottom: '0', 
                right: '0', 
                backgroundColor: '#72b626', 
                borderRadius: '50%',
                width: '20px',
                height: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px'
              }}>
                ✓
              </div>
            </div>

            {/* Profile Info */}
            <div style={{ marginLeft: '96px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ margin: '0', fontSize: '20px' }}>Yuvaraj S R</h2>
                <button style={{ 
                  backgroundColor: 'transparent',
                  color: '#72b626',
                  border: 'none',
                  fontSize: '14px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  Edit Profile ✏️
                </button>
              </div>
              <p style={{ margin: '4px 0', color: '#aaa', fontSize: '14px' }}>organiser</p>
              <p style={{ margin: '4px 0', fontSize: '14px' }}>YuvarajSR</p>
            </div>

            {/* Stats */}
            <div style={{ 
              display: 'flex', 
              gap: '20px', 
              borderTop: '1px solid #333',
              paddingTop: '16px'
            }}>
              <div>
                <span style={{ fontWeight: 'bold', fontSize: '16px' }}>0</span>
                <span style={{ color: '#aaa', marginLeft: '4px', fontSize: '14px' }}>XP</span>
              </div>
              <div style={{ borderLeft: '1px solid #333', paddingLeft: '20px' }}>
                <span style={{ fontWeight: 'bold', fontSize: '16px' }}>6</span>
                <span style={{ color: '#aaa', marginLeft: '4px', fontSize: '14px' }}>Followers</span>
              </div>
              <div style={{ borderLeft: '1px solid #333', paddingLeft: '20px' }}>
                <span style={{ fontWeight: 'bold', fontSize: '16px' }}>6</span>
                <span style={{ color: '#aaa', marginLeft: '4px', fontSize: '14px' }}>Following</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Follow and Events */}
        <div style={{ width: '300px', borderLeft: '1px solid #333', padding: '16px' }}>
          {/* Follow Section */}
          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ fontSize: '18px', marginBottom: '16px' }}>Follow</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* User 1 */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', marginRight: '12px' }}>
                    <img src="/path-to-user1.jpg" alt="User" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <p style={{ margin: '0', fontSize: '14px' }}>Gary Sultania</p>
                    <p style={{ margin: '0', color: '#aaa', fontSize: '12px' }}>@gary</p>
                  </div>
                </div>
                <button style={{ 
                  backgroundColor: 'transparent', 
                  color: '#72b626', 
                  border: '1px solid #72b626', 
                  borderRadius: '20px', 
                  padding: '6px 16px', 
                  fontSize: '12px',
                  cursor: 'pointer'
                }}>
                  Follow
                </button>
              </div>

              {/* User 2 */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', marginRight: '12px' }}>
                    <img src="/path-to-user2.jpg" alt="User" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <p style={{ margin: '0', fontSize: '14px' }}>Abbas Rizvi</p>
                    <p style={{ margin: '0', color: '#aaa', fontSize: '12px' }}>@astrix_1952...</p>
                  </div>
                </div>
                <button style={{ 
                  backgroundColor: 'transparent', 
                  color: '#72b626', 
                  border: '1px solid #72b626', 
                  borderRadius: '20px', 
                  padding: '6px 16px', 
                  fontSize: '12px',
                  cursor: 'pointer'
                }}>
                  Follow
                </button>
              </div>

              {/* User 3 */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', marginRight: '12px' }}>
                    <img src="/path-to-user3.jpg" alt="User" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <p style={{ margin: '0', fontSize: '14px' }}>Kuldeep Kumar Gupta</p>
                    <p style={{ margin: '0', color: '#aaa', fontSize: '12px' }}>@kg1997</p>
                  </div>
                </div>
                <button style={{ 
                  backgroundColor: 'transparent', 
                  color: '#72b626', 
                  border: '1px solid #72b626', 
                  borderRadius: '20px', 
                  padding: '6px 16px', 
                  fontSize: '12px',
                  cursor: 'pointer'
                }}>
                  Follow
                </button>
              </div>
            </div>
          </div>

          {/* Events Section */}
          <div>
            <h3 style={{ fontSize: '18px', marginBottom: '16px' }}>Events</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Event 1 */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '8px', overflow: 'hidden', marginRight: '12px' }}>
                    <img src="/path-to-event1.jpg" alt="Event" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <p style={{ margin: '0', fontSize: '14px' }}>Vivek_Rajpoot</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: '#aaa', fontSize: '12px' }}>📅 Mar 19, 2025</span>
                      <span style={{ color: '#aaa', fontSize: '12px' }}>📍 delhi</span>
                    </div>
                  </div>
                </div>
                <button style={{ 
                  backgroundColor: 'transparent', 
                  color: '#72b626', 
                  border: '1px solid #72b626', 
                  borderRadius: '20px', 
                  padding: '6px 16px', 
                  fontSize: '12px',
                  cursor: 'pointer'
                }}>
                  Book
                </button>
              </div>

              {/* Event 2 */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '8px', overflow: 'hidden', marginRight: '12px', backgroundColor: '#333' }}>
                    <img src="/path-to-event2.jpg" alt="Event" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <p style={{ margin: '0', fontSize: '14px' }}>Vimal Saraswat</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: '#aaa', fontSize: '12px' }}>📅 Mar 28, 2025</span>
                      <span style={{ color: '#aaa', fontSize: '12px' }}>📍 Legen 73a, 2...</span>
                    </div>
                  </div>
                </div>
                <button style={{ 
                  backgroundColor: 'transparent', 
                  color: '#72b626', 
                  border: '1px solid #72b626', 
                  borderRadius: '20px', 
                  padding: '6px 16px', 
                  fontSize: '12px',
                  cursor: 'pointer'
                }}>
                  Book
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadProfile;